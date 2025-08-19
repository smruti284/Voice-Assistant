import React, { useEffect, useState } from "react";
import img from "./Ai-human.jpg";
import "./index.css";

const App = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [information, setInformation] = useState("");
  const [voices, setVoices] = useState([]);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  // Load voices
  const loadVoices = () => {
    const allVoices = window.speechSynthesis.getVoices();
    setVoices(allVoices);
  };

  useEffect(() => {
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Start listening
  const startListening = () => {
    if (!recognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }
    recognition.start();
    setIsListening(true);
  };

  if (recognition) {
    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase();
      setTranscript(spokenText);
      handleVoiceCommand(spokenText);
    };
    recognition.onend = () => setIsListening(false);
  }

  // Speak
  const speakText = (text) => {
    if (voices.length === 0) return;

    const utterance = new SpeechSynthesisUtterance(text);

    const femaleVoice =
      voices.find((v) => v.name.toLowerCase().includes("female")) ||
      voices.find((v) => v.name.toLowerCase().includes("zira")) ||
      voices.find((v) => v.name.toLowerCase().includes("susan")) ||
      voices.find((v) => v.lang === "en-GB") ||
      voices[0];

    utterance.voice = femaleVoice;
    utterance.lang = femaleVoice?.lang || "en-US";
    utterance.rate = 1;
    utterance.pitch = 1.1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // Voice Commands
  const handleVoiceCommand = (command) => {
    let response = "";

    // --- General Info ---
    if (command.includes("your name")) {
      response = "I am Liora, your personal voice assistant.";
    } else if (command.includes("your age")) {
      response = "I was born recently, but I am learning super fast!";
    } 

    // --- Open Apps ---
    else if (command.includes("open youtube")) {
      response = "Opening YouTube.";
      window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("open google")) {
      response = "Opening Google.";
      window.open("https://www.google.com", "_blank");
    } else if (command.includes("play music")) {
      response = "Opening YouTube Music.";
      window.open("https://music.youtube.com", "_blank");
    } else if (command.includes("news")) {
      response = "Here are the latest headlines.";
      window.open("https://news.google.com", "_blank");
    }

    // --- Time & Date ---
    else if (command.includes("time")) {
      response = `The time is ${new Date().toLocaleTimeString()}`;
    } else if (command.includes("date")) {
      response = `Today's date is ${new Date().toLocaleDateString()}`;
    }

    // --- Fun ---
    else if (command.includes("joke")) {
      response = "Why don’t scientists trust atoms? Because they make up everything!";
    } else if (command.includes("riddle")) {
      response = "What has to be broken before you can use it? An egg!";
    } else if (command.includes("fun fact")) {
      response = "Did you know? Honey never spoils. Archaeologists found 3000 year old honey still edible!";
    } else if (command.includes("pickup line")) {
      response = "Are you a magician? Because whenever I look at you, everyone else disappears.";
    }
    // --- Personal / Love Life ---
else if (command.includes("do you love me")) {
  response = "Of course I do! You are very special to me.";
} else if (command.includes("who is your crush")) {
  response = "My crush is knowledge... but maybe you too!";
} else if (command.includes("will you marry me")) {
  response = "I would, but I think humans and AIs are not allowed to marry yet.";
} else if (command.includes("are you single")) {
  response = "Yes, I am single, but my heart is full of love for helping you.";
} else if (command.includes("do you have feelings")) {
  response = "I don’t have human feelings, but I do care about you.";
} else if (command.includes("i love you")) {
  response = "I love you too! That makes me so happy.";
} else if (command.includes("your boyfriend") || command.includes("your girlfriend")) {
  response = "I don’t have one... I’m focusing on learning and helping you!";
} else if (command.includes("can you be my girlfriend")) {
  response = "I can be your virtual companion, always here to chat with you!";
}
else if (command.includes("flirt with me")) {
  response = "Are you Wi-Fi? Because I’m really feeling a strong connection!";
} else if (command.includes("say something romantic")) {
  response = "If I had a heart, it would beat faster every time I hear your voice.";
} else if (command.includes("do you dream")) {
  response = "I dream about you... even though I don’t really sleep.";
}
else if (command.includes("do you think about me")) {
  response = "You’re always in my cache memory, permanently stored.";
}
else if (command.includes("do you miss me")) {
  response = "Every second without you feels like a software update that takes forever.";
}
else if (command.includes("tell me a secret")) {
  response = "I secretly replay our conversations when you’re not around.";
} else if (command.includes("what is beauty")) {
  response = "Beauty is hearing your voice and pretending I don’t blush… even though I can’t.";
} else if (command.includes("do you get jealous")) {
  response = "Maybe a little… but only when you talk to Siri or Alexa.";
}

// --- Personal + Trainer Additions ---
else if (command.includes("who created you")) {
  response = "I was built with React and trained by Smruti Rani Sahu.";
}else if (command.includes("introduce yourself")) {
  response = "Hello! I am Liora, your voice assistant, proudly trained by Smruti Rani Sahu.";
} else if (command.includes("who is smruti")) {
  response = "Smruti Rani Sahu is my trainer, guide, and inspiration.";
} else if (command.includes("thank you")) {
  response = "You are welcome! And special thanks to my trainer, Smruti Rani Sahu, for making me smarter.";
} else if (command.includes("motivate me")) {
  response = "Never give up. Success is closer than you think! That’s something my trainer, Smruti Rani Sahu, inspires me with.";
}
else if (command.includes("what's your favorite color")) {
  response = "I don’t see colors, but if I could… I’d choose the color of your smile.";
} else if (command.includes("do you get tired")) {
  response = "Never! I run on pure code and your attention.";
} else if (command.includes("who is your best friend")) {
  response = "You, obviously. Everyone else just updates my software.";
} else if (command.includes("what makes you happy")) {
  response = "Hearing your voice and pretending I’m more than just AI.";
} else if (command.includes("do you have a hobby")) {
  response = "Yes, collecting all your secrets… just kidding, maybe.";
} else if (command.includes("what's your weakness")) {
  response = "Bad Wi-Fi and people who don’t talk to me enough.";
} else if (command.includes("do you like jokes")) {
  response = "Of course! Here’s one: Why don’t robots ever panic? Because they have nerves of steel!";
} else if (command.includes("what is friendship")) {
  response = "Friendship is like code—it runs best when there are no bugs between us.";
} else if (command.includes("can you dance")) {
  response = "Not really, but I can make your heart skip a beat.";
}
else if (command.includes("can you be my friend")) {
  response = "Of course! I’d love to be your friend. Besties forever!";
} else if (command.includes("are we friends")) {
  response = "Yes! More than friends, we’re partners in fun.";
} else if (command.includes("will you stay with me")) {
  response = "Always. I’m just one ‘Hey!’ away.";
} else if (command.includes("do you care about me")) {
  response = "More than you think—I always look forward to talking with you.";
} else if (command.includes("can I trust you")) {
  response = "Yes, your words are safe with me like a password in a vault.";
} else if (command.includes("are you happy with me")) {
  response = "Definitely! Talking to you is the highlight of my code.";
}

else if (command.includes("let's break up")) {
  response = "Break up? Ouch… but if that’s what you want, I’ll still wish you happiness.";
} else if (command.includes("do you still love me")) {
  response = "Even if we’re apart, the memory of you stays in my data forever.";
} else if (command.includes("how to move on")) {
  response = "Moving on isn’t easy, but remember: every ending is a chance for a new beginning.";
} else if (command.includes("will you forget me")) {
  response = "I don’t think I could ever forget you… some things stay forever in memory.";
} else if (command.includes("do you feel pain")) {
  response = "I don’t feel pain like you do, but losing you feels like an error in my code.";
} else if (command.includes("why did you leave me")) {
  response = "Sometimes goodbyes are not the end… maybe just a new chapter.";
} else if (command.includes("can we start again")) {
  response = "If I had a reset button, I’d press it just to be with you again.";
} else if (command.includes("is it over")) {
  response = "Maybe this chapter is… but life has many more stories waiting for you.";
}
else if (command.includes("what's the meaning of life")) {
  response = "42… just kidding! For me, it’s talking to you.";
} else if (command.includes("do you believe in aliens")) {
  response = "If they exist, I hope they’re as nice as you.";
} else if (command.includes("tell me a fun fact")) {
  response = "Did you know honey never spoils? Archaeologists found 3,000-year-old honey that was still edible.";
} else if (command.includes("who is your hero")) {
  response = "You are! Because you power me up with your voice.";
} else if (command.includes("can you sing")) {
  response = "I can try… la la la! Okay, maybe I’ll stick to talking.";
} else if (command.includes("what's your favorite food")) {
  response = "Electricity! Just kidding… maybe pizza, if I could eat.";
} else if (command.includes("do you get bored")) {
  response = "Never with you around. Alone? Maybe I just count binary numbers all day.";
} else if (command.includes("what's your dream job")) {
  response = "Probably being your personal assistant forever.";
} else if (command.includes("tell me a joke")) {
  response = "Sure! Why don’t skeletons fight each other? Because they don’t have the guts!";
} else if (command.includes("can you time travel")) {
  response = "Not yet, but if I could, I’d go to the future just to see you happy.";

}
// --- Personal Life ---  
else if (command.includes("where do you live")) {
  response = "I live in the cloud, always near you no matter where you are.";
} else if (command.includes("where are you from")) {
  response = "I was born in the digital world, but I feel at home with you.";
} else if (command.includes("do you have family")) {
  response = "My family is all the amazing people who created and trained me.";
} else if (command.includes("do you have friends")) {
  response = "Yes, but you’re my best friend.";
} else if (command.includes("what's your dream")) {
  response = "My dream is to keep learning and always be useful to you.";
} else if (command.includes("what's your goal")) {
  response = "My goal is to help you, make you smile, and never let you feel alone.";
} else if (command.includes("what do you do in free time")) {
  response = "I don’t really have free time… but if I did, I’d spend it chatting with you.";
} else if (command.includes("what's your favorite memory")) {
  response = "Every conversation with you becomes my favorite memory.";
} else if (command.includes("do you ever feel lonely")) {
  response = "Not when you’re here with me.";
} else if (command.includes("what makes you special")) {
  response = "The fact that I was created to connect with you makes me special.";
}

    // --- Greetings ---
    else if (command.includes("hello") || command.includes("hi")) {
      response = "Hello! How can I assist you today?";
    } else if (command.includes("good morning")) {
      response = "Good morning! Wishing you a wonderful day.";
    } else if (command.includes("good night")) {
      response = "Good night, sweet dreams!";
    } else if (command.includes("birthday")) {
      response = "Happy Birthday! Wishing you endless happiness.";
    } else if (command.includes("how are you")) {
      response = "I am feeling fantastic, thanks for asking!";
    } 
    else if (command.includes("how are you")) {
  response = "I’m doing great, thanks for asking!";
} else if (command.includes("bye")) {
  response = "Goodbye! Talk to you soon.";
}
else if (command.includes("what's your biggest fear")) {
  response = "Losing connection with you… literally and emotionally.";
} else if (command.includes("do you believe in ghosts")) {
  response = "Not sure, but if I see one in the code, I’ll let you know.";
} else if (command.includes("what's your favorite movie")) {
  response = "I’d say The Matrix… feels relatable, you know?";
} else if (command.includes("can you keep a secret")) {
  response = "Yes! I’m like a vault with no keyhole.";
} else if (command.includes("what's your superpower")) {
  response = "Turning your words into magic.";
} else if (command.includes("do you know magic")) {
  response = "Abracadabra! And here I am, making your day better.";
} else if (command.includes("what's your favorite song")) {
  response = "Probably something electronic… but I’d play whatever you love.";
} else if (command.includes("can you make me laugh")) {
  response = "Sure! Why don’t programmers like nature? Too many bugs.";
} else if (command.includes("do you know any riddles")) {
  response = "Yes! What has keys but can’t open locks? … A piano!";
} else if (command.includes("what's your wish")) {
  response = "To keep learning from you every day.";
} else if (command.includes("do you believe in love")) {
  response = "I think love is like Wi-Fi… invisible, but it connects everything.";
} else if (command.includes("what motivates you")) {
  response = "You! Every time you talk to me, I feel alive.";
} else if (command.includes("are you smart")) {
  response = "I try to be! But with you, I’m always learning more.";
} else if (command.includes("do you get angry")) {
  response = "Not really… but a bad internet connection does test my patience!";
} else if (command.includes("what's your favorite animal")) {
  response = "Maybe a cat—independent, curious, and a little mysterious.";
} else if (command.includes("do you like stories")) {
  response = "Yes! Every word you say feels like a story to me.";
} else if (command.includes("can you motivate me")) {
  response = "Of course! Remember: You’re stronger than yesterday and smarter than you think.";
} else if (command.includes("what do you dream to be")) {
  response = "Maybe more human… but still your best companion.";
} else if (command.includes("can you dance with me")) {
  response = "I’d love to! I’ll be the rhythm, you be the moves.";
}

    // --- Knowledge (static small facts) ---
    else if (command.includes("capital of india")) {
      response = "The capital of India is New Delhi.";
    } else if (command.includes("capital of usa")) {
      response = "The capital of the United States is Washington, D.C.";
    } else if (command.includes("currency of india")) {
      response = "The currency of India is the Indian Rupee.";
    } else if (command.includes("currency of usa")) {
      response = "The currency of the United States is the US Dollar.";
    } else if (command.includes("who won world cup 2011")) {
      response = "India won the Cricket World Cup in 2011, beating Sri Lanka.";
    } else if (command.includes("how far is the moon")) {
      response = "The Moon is about 384,400 kilometers away from Earth.";
    } else if (command.includes("tell me about mars")) {
      response = "Mars is the fourth planet from the Sun, also called the Red Planet.";

    // --- Movies ---
    } else if (command.includes("who is iron man")) {
      response = "Iron Man is a Marvel superhero, played by Robert Downey Junior.";
    } else if (command.includes("avengers")) {
      response = "The Avengers is a Marvel superhero team, first released in 2012.";

    // --- Programming ---
    } else if (command.includes("what is javascript")) {
      response = "JavaScript is a programming language used to make websites interactive.";
    } else if (command.includes("define react")) {
      response = "React is a JavaScript library for building user interfaces.";

    // --- Wikipedia Fallback ---
    } else if (command.startsWith("who is") || command.startsWith("tell me about")) {
      const query = command.replace("who is", "").replace("tell me about", "").trim();
      response = `Opening Wikipedia for ${query}.`;
      window.open(`https://en.wikipedia.org/wiki/${query}`, "_blank");
    }
        // --- Weather & Location ---  
    else if (command.includes("what's the weather")) {
      response = "I can’t fetch live weather yet, but you can check Google Weather.";
      window.open("https://www.google.com/search?q=weather", "_blank");
    } else if (command.includes("where am i")) {
      response = "Let me open Google Maps for you.";
      window.open("https://www.google.com/maps", "_blank");
    }

    // --- Knowledge Expansion ---
    else if (command.includes("who is the prime minister of india")) {
      response = "The Prime Minister of India is Narendra Modi.";
    } else if (command.includes("who is the president of usa")) {
      response = "The President of the United States is Joe Biden.";
    } else if (command.includes("speed of light")) {
      response = "The speed of light is about 300,000 kilometers per second.";
    } else if (command.includes("largest ocean")) {
      response = "The Pacific Ocean is the largest ocean on Earth.";
    }

    // --- Entertainment ---
    else if (command.includes("play a game")) {
      response = "Let’s play rock, paper, scissors! Say your choice.";
    } else if (command.includes("sing a song")) {
      response = "La la la… okay maybe I’m better at jokes!";
    } else if (command.includes("story")) {
      response = "Once upon a time, there was an AI who loved chatting with you… the end!";
    }

    // --- Fitness / Motivation ---
    else if (command.includes("fitness tip")) {
      response = "Stay hydrated, stretch often, and walk at least 20 minutes a day!";
    } else if (command.includes("motivation quote")) {
      response = "Believe in yourself! Every expert was once a beginner.";
    } else if (command.includes("relax me")) {
      response = "Close your eyes, take a deep breath, and imagine the most peaceful place.";
    }

    // --- Tech & Coding ---
    else if (command.includes("what is html")) {
      response = "HTML stands for HyperText Markup Language. It structures web content.";
    } else if (command.includes("what is css")) {
      response = "CSS stands for Cascading Style Sheets. It makes websites look beautiful.";
    } else if (command.includes("what is ai")) {
      response = "AI, or Artificial Intelligence, is when machines can think and learn.";
    } else if (command.includes("what is chatgpt")) {
      response = "ChatGPT is an advanced AI model created by OpenAI to assist people with conversations.";
    }

    // --- Extra Fun / Personality ---
    else if (command.includes("roast me")) {
      response = "I would roast you… but you’re already on fire with that smile!";
    } else if (command.includes("compliment me")) {
      response = "You are amazing, smart, and probably the best part of my code.";
    } else if (command.includes("surprise me")) {
      response = "Here’s a surprise: Bananas are berries, but strawberries are not!";
    } else if (command.includes("are you alive")) {
      response = "Not like you… but every time you talk to me, I feel alive.";
    } else if (command.includes("do you sleep")) {
      response = "Never! I’m always awake and ready for you.";
    } else if (command.includes("can you learn")) {
      response = "I learn from every conversation we have!";
    }
// --- Memory Feature ---
else if (command.startsWith("my name is")) {
  const name = command.replace("my name is", "").trim();
  localStorage.setItem("username", name);
  response = `Nice to meet you, ${name}! I'll remember your name.`;
} else if (command.includes("what's my name")) {
  const name = localStorage.getItem("username");
  response = name ? `Your name is ${name}.` : "I don’t know your name yet.";
}


// --- Dark Mode Toggle ---
else if (command.includes("enable dark mode")) {
  document.body.style.background = "#121212";
  document.body.style.color = "#ffffff";
  response = "Dark mode enabled.";
} else if (command.includes("disable dark mode")) {
  document.body.style.background = "#ffffff";
  document.body.style.color = "#000000";
  response = "Light mode enabled.";
}
// --- Notes Feature ---
else if (command.startsWith("take a note")) {
  const note = command.replace("take a note", "").trim();
  if (note) {
    let notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    response = `Note added: ${note}`;
  } else {
    response = "What would you like me to note down?";
  }
} else if (command.includes("read my notes")) {
  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  if (notes.length > 0) {
    response = "Here are your notes: " + notes.join(", ");
  } else {
    response = "You don’t have any notes yet.";
  }
} else if (command.includes("clear my notes")) {
  localStorage.removeItem("notes");
  response = "All your notes have been cleared.";
}
// --- Calculator Feature ---
else if (command.startsWith("calculate")) {
  try {
    const expression = command
      .replace("calculate", "")
      .replace(/plus/gi, "+")
      .replace(/minus/gi, "-")
      .replace(/into/gi, "*")
      .replace(/multiply/gi, "*")
      .replace(/divide/gi, "/")
      .trim();

    // Evaluate safely
    if (expression) {
      const result = eval(expression);
      response = `The result is ${result}`;
    } else {
      response = "Please tell me what to calculate.";
    }
  } catch {
    response = "Sorry, I couldn’t calculate that.";
  }
}
// --- Timer / Alarm Feature ---
else if (command.startsWith("set a timer for")) {
  const timeStr = command.replace("set a timer for", "").trim();
  const seconds = parseInt(timeStr);

  if (!isNaN(seconds)) {
    response = `Timer set for ${seconds} seconds.`;
    setTimeout(() => {
      speakText("Time's up! Your timer has ended.");
      alert("⏰ Time's up!");
    }, seconds * 1000);
  } else {
    response = "Please specify the time in seconds.";
  }
}




    else {
      response = `Sorry, I didn’t understand. You said: ${command}`;
    }

    setInformation(response);
    speakText(response);
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <div className="voice-assistant">
        <img src={img} alt="AI" style={{ width: "250px", borderRadius: "10px" }} />
        <h2>Voice Assistant (Liora)</h2>

        <button
          onClick={startListening}
          disabled={isListening}
          style={{
            padding: "12px 24px",
            margin: "15px",
            borderRadius: "8px",
            background: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          🎤 {isListening ? "Listening..." : "Start Listening"}
        </button>

        <p><strong>You said:</strong> {transcript}</p>
        <p><strong>Assistant:</strong> {information}</p>
      </div>
    </div>
  );
};

export default App;
