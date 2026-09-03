let btn = document.querySelector("button");
let box = document.createElement("div");
let main = document.querySelector("main");
let count = document.querySelector(".count");
let  overlay = document.querySelector(".overlay")
let game = document.querySelector(".game")


box.classList.add("box")
let score = 0
let time = 0;
let interval;

const rendombox = ()=>{
    main.append(box)
    let random1 = Math.random() * 80;
    let random2 = Math.random() * 80;

    let c1 = Math.random() * 300;
    let c2 = Math.random() * 300;
    let c3 = Math.random() * 300;

    box.style.top = `${random1}%`;
    box.style.left = `${random2}%`;
    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
}

btn.addEventListener("click", (e) => {
    rendombox();

    clearInterval(interval)
    score = 0
    time = 0

    interval = setInterval(() => {
        rendombox();
    time += 1;
    count.textContent = time;
  }, 1000);

  setTimeout(()=>{
    clearInterval(interval)
    overlay.style.display = "flex"
  },10000)
});

box.addEventListener("click",(e)=>{
    score +=1;
    game.textContent = score;

    box.remove()
})