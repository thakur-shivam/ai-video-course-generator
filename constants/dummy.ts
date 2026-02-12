export const DUMMY_VIDEO_SLIDES = [
  {
    slideId: "introduction-setup-01",
    slideIndex: 1,
    title: "What Python is and where it's used",
    subtitle: "Overview of common application areas",
    audioFileName: "introduction-setup-01.mp3",
    narration: {
      fullText:
        "Python is a high-level, readable programming language that is widely used for web development, data science, automation, and scripting. Its simple syntax and a large ecosystem of libraries make it a popular choice for both beginners and experienced developers. In this lesson we will identify common uses of Python so you can see where it fits into real projects and career paths.",
    },
    html: '<script src="https://cdn.tailwindcss.com"></script><div style="width:1280px;height:720px;" class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans"><style>.reveal { opacity:0; transform:translateY(12px); } .reveal.is-on { opacity:1; transform:translateY(0); } .card { background: linear-gradient(180deg, rgba(255,255,255,0.03), transparent); border-radius:12px; padding:18px; } body{margin:0;}</style><div class="w-full h-full p-10 flex flex-col"><header class="flex items-center justify-between"><div class="text-sm opacity-75">Python Fundamentals • Introduction & Setup</div><div class="text-xs opacity-60">Slide 1</div></header><main class="flex-1 flex items-start mt-8"><div class="w-2/3"><h1 class="text-5xl font-bold leading-tight">What Python is and where it\'s used</h1><p class="mt-3 text-lg text-gray-300">A concise look at the language and its big-picture uses.</p><ul class="mt-8 space-y-4 text-lg"><li class="reveal card" data-reveal="r1">Python is a high-level, readable language used for web development, data science, automation, and scripting.</li><li class="reveal card" data-reveal="r2">It has a broad ecosystem of libraries and frameworks that accelerate development across many domains.</li><li class="reveal card" data-reveal="r3">Understanding common use cases helps you pick the right tools and projects to build skills.</li></ul></div><div class="w-1/3 pl-8 flex items-center justify-center"><div class="card w-full text-gray-200"><div class="text-sm opacity-75">Quick Tip</div><div class="mt-4 text-xl font-semibold">Think in problems, not tools.</div><div class="mt-2 text-gray-300">Match Python libraries to the problem domain to work faster.</div></div></div></main><footer class="text-xs opacity-60 mt-6">Audio: introduction-setup-01.mp3</footer></div></div>',
    revelData: ["r1", "r2", "r3"],
  },
  {
    slideId: "introduction-setup-02",
    slideIndex: 2,
    title: "Install Python and run your first script",
    subtitle: "Set up your environment and execute code",
    audioFileName: "introduction-setup-02.mp3",
    narration: {
      fullText:
        "Installing Python is the first practical step and is straightforward on Windows, macOS, and Linux. I will guide you through downloading the installer, configuring basic settings, and running your very first script from the command line. By the end you will be able to verify the installation and execute .py files reliably.",
    },
    html: '<script src="https://cdn.tailwindcss.com"></script><div style="width:1280px;height:720px;" class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans"><style>.reveal { opacity:0; transform:translateY(12px); } .reveal.is-on { opacity:1; transform:translateY(0); } .step { background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent); border-radius:10px; padding:16px; } body{margin:0;}</style><div class="w-full h-full p-10 flex flex-col"><header class="flex items-center justify-between"><div class="text-sm opacity-75">Python Fundamentals • Introduction & Setup</div><div class="text-xs opacity-60">Slide 2</div></header><main class="flex-1 flex items-start mt-8"><div class="w-2/3"><h1 class="text-5xl font-bold leading-tight">Install Python and run your first script</h1><p class="mt-3 text-lg text-gray-300">Hands-on steps to get Python running on your machine.</p><ol class="mt-8 space-y-4 text-lg list-decimal list-inside"><li class="reveal step" data-reveal="r1">Download and install Python for your operating system, following the installer prompts and adding Python to your PATH if prompted.</li><li class="reveal step" data-reveal="r2">Open a terminal or command prompt, create a simple script file named hello.py, and write a basic print statement.</li><li class="reveal step" data-reveal="r3">Run the script with python hello.py to confirm the interpreter is working and the file executes as expected.</li></ol></div><div class="w-1/3 pl-8 flex items-center justify-center"><div class="step w-full text-gray-200"><div class="text-sm opacity-75">Checklist</div><ul class="mt-3 text-gray-300 space-y-2"><li>Installer downloaded</li><li>PATH configured</li><li>First script executed</li></ul></div></div></main><footer class="text-xs opacity-60 mt-6">Audio: introduction-setup-02.mp3</footer></div></div>',
    revelData: ["r1", "r2", "r3"],
  },
  {
    slideId: "introduction-setup-03",
    slideIndex: 3,
    title: "Use the REPL and a simple code editor",
    subtitle: "Interactive testing and editor workflow",
    audioFileName: "introduction-setup-03.mp3",
    narration: {
      fullText:
        "The REPL allows you to experiment interactively and get immediate feedback, which is ideal for learning and quick tests. We will also cover a simple code editor workflow for writing, saving, and running scripts with ease. Together these tools create a lightweight development loop you can use right away to prototype and learn.",
    },
    html: '<script src="https://cdn.tailwindcss.com"></script><div style="width:1280px;height:720px;" class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans"><style>.reveal { opacity:0; transform:translateY(12px); } .reveal.is-on { opacity:1; transform:translateY(0); } .panel { background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent); border-radius:10px; padding:14px; } body{margin:0;}</style><div class="w-full h-full p-10 flex flex-col"><header class="flex items-center justify-between"><div class="text-sm opacity-75">Python Fundamentals • Introduction & Setup</div><div class="text-xs opacity-60">Slide 3</div></header><main class="flex-1 flex items-start mt-8"><div class="w-2/3"><h1 class="text-5xl font-bold leading-tight">Use the REPL and a simple code editor</h1><p class="mt-3 text-lg text-gray-300">Interactive tools to try ideas and write scripts.</p><div class="mt-8 grid gap-4"><div class="reveal panel" data-reveal="r1"><div class="font-semibold">REPL (Interactive)</div><div class="text-gray-300 mt-1">Run python in a terminal to test expressions and inspect results immediately.</div></div><div class="reveal panel" data-reveal="r2"><div class="font-semibold">Editor Workflow</div><div class="text-gray-300 mt-1">Use a lightweight editor to edit files, save, and run scripts without heavy setup.</div></div><div class="reveal panel" data-reveal="r3"><div class="font-semibold">Quick Loop</div><div class="text-gray-300 mt-1">Combine small tests in the REPL with saved scripts for an efficient learning loop.</div></div></div></div><div class="w-1/3 pl-8 flex items-center justify-center"><div class="panel w-full text-gray-200"><div class="text-sm opacity-75">Try This</div><div class="mt-3 text-gray-300">Open a terminal, type python, try print(\'Hello\'), then create a file and run it.</div></div></div></main><footer class="text-xs opacity-60 mt-6">Audio: introduction-setup-03.mp3</footer></div></div>',
    revelData: ["r1", "r2", "r3"],
  },
];
