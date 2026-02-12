import { client } from "@/config/openai";
import { DUMMY_VIDEO_SLIDES } from "@/constants/dummy";
import { GENERATE_VIDEO_CONTENT_PROMPT } from "@/constants/prompt";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { BlobServiceClient } from "@azure/storage-blob";
import Replicate from "replicate";
import { chapterContentSlides } from "@/config/schema";
import { db } from "@/config/db";
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY || "",
});

export async function POST(req: NextRequest) {
  const { chapter, courseId } = await req.json();

  // Generate JSON Schema for Video Content
  // const response = await client.chat.completions.create({
  //     model: "gpt-5-mini",
  //     messages: [
  //         { role: "system", content: GENERATE_VIDEO_CONTENT_PROMPT },
  //         { role: "user", content: "Chapter Detail Is" + JSON.stringify(chapter) }
  //     ]
  // });

  // const rawResponse = response.choices[0].message.content;
  // const JSONResponse = JSON.parse(rawResponse?.replace('```json', '').replace('```', '') || '[]');

  // Audio File Generation using TTS for Narration
  const VideoContentJSON = DUMMY_VIDEO_SLIDES;
  const audioFileUrls: string[] = [
    "https://tubeguruji.blob.core.windows.net/audio/intro-and-setup-01.mp3.mp3",
  ];

  // for (let i = 0; i < VideoContentJSON.length; i++) {
  //   if (i > 0) break;
  //   const narration = VideoContentJSON[i].narration.fullText;
  //   const fonadaResponse = await axios.post(
  //     "https://api.fonada.ai/tts/generate-audio-large",
  //     {
  //       input: narration,
  //       voice: "Vaanee",
  //       language: "English"
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${process.env.FONADALABS_API_KEY}`,
  //       },
  //       responseType: "arraybuffer",
  //       timeout: 120000
  //     },
  //   );

  //   const audioBuffer = Buffer.from(fonadaResponse.data);
  //   console.log(audioBuffer);

  // Store Audio File in Cloud Storage (e.g., AWS S3, Google Cloud Storage, Microsoft Azure)
  //   const audioUrl = await SaveAudioToStorage(audioBuffer, VideoContentJSON[i].audioFileName);
  //   console.log(audioUrl);
  //   audioFileUrls.push(audioUrl);
  // }

  // Generate Captions for the Audio
  const captionArray: any[] = [];
  // for (let i = 0; i < audioFileUrls.length; i++) {
  //   const caption = await GenerateCaptions(audioFileUrls[i]);
  //   console.log(caption);
  //   captionArray.push(caption);
  // }

  // Save Everything to Database
  // VideoContentJSON.forEach(async (slide, index) => {
  //   const response = await db.insert(chapterContentSlides).values({
  //     chapterId: chapter.chapterId,
  //     courseId: courseId,
  //     slideIndex: VideoContentJSON[index].slideIndex,
  //     slideId: VideoContentJSON[index].slideId,
  //     audioFileName: VideoContentJSON[index].audioFileName,
  //     narration: VideoContentJSON[index].narration,
  //     revealData: VideoContentJSON[index].revelData,
  //     html: VideoContentJSON[index].html,
  //     audioFileUrl: audioFileUrls[index],
  //     caption: captionArray[index] ?? {}
  //   }).returning();
  // });

  // Return Response
  return NextResponse.json({
    ...VideoContentJSON,
    audioFileUrls,
    captionArray,
  });
}

const SaveAudioToStorage = async (audioBuffer: Buffer, fileName: string) => {
    // Implement Cloud Storage
    const blobService = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING || "");

    const container = blobService.getContainerClient(process.env.AZURE_STORAGE_CONTAINER_NAME || "");

    const blobName = `/tts/${fileName}`;
    const blockBlob = container.getBlockBlobClient(blobName);

    await blockBlob.uploadData(audioBuffer, {
      blobHTTPHeaders: {
        blobContentType: "audio/mpeg",
        blobCacheControl: "public, max-age=31536000, immutable"
      }
    });

    // Return Url
    const publicBase = process.env.AZURE_STORAGE_PUBLIC_BASE_URL || "";
    const url = publicBase ? publicBase + "/" + container.containerName + "/" + blobName : blockBlob?.url;

    return url;
}

const GenerateCaptions = async (audioUrl: string) => {
  const input = {
    audio: audioUrl,
    batch_size: 64
  };

  const output = await replicate.run("vaibhavs10/incredibly-fast-whisper:3ab86df6c8f54c11309d4d1f930ac292bad43ace52d10c80d87eb258b3c9f79c", { input });

  console.log(output);
  return output;
};
