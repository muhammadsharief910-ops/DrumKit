const sounds = {
        a1: "/sounds/crash.mp3",
        a2: "/sounds/kick-bass.mp3",
        a3: "/sounds/snare.mp3",
        a4: "/sounds/tom-1.mp3",
        a5: "/sounds/tom-2.mp3",
        a6: "/sounds/tom-3.mp3",
        a7: "/sounds/tom-4.mp3",
      };

      const keyMap = {
        a: "a1",
        s: "a2",
        d: "a3",
        f: "a4",
        j: "a5",
        k: "a6",
        l: "a7",
      };

      
      document.getElementById("container").addEventListener("click", function (e) {
        const box = e.target.closest(".a");
        if (box) {
          const id = box.id;
          new Audio(sounds[id]).play();
        }
      });

      
      document.addEventListener("keydown", function (e) {
        const key = e.key.toLowerCase();

        if (keyMap[key]) {
          const id = keyMap[key];
          new Audio(sounds[id]).play();

          
          document.getElementById(id).style.transform = "scale(0.95)";
          setTimeout(() => {
            document.getElementById(id).style.transform = "scale(1)";
          }, 100);
        }
      });