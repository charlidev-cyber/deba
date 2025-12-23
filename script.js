/* MUSIC */
const music = document.getElementById("music");
window.onload = () => music.play().catch(()=>{});
document.addEventListener("click",()=>music.play(),{once:true});
document.addEventListener("touchstart",()=>music.play(),{once:true});

/* COMPLIMENTS */
const compliments = [
 "Tume bohut beautiful 💖",
 "Tuma smile re pura din bright hei jaye ☀️",
 "Mu lucky je tume mora life re achha ❤️",
 "Tume mora peace, mora happiness 🌸",
 "Ei duniya re tuma jaga alaga ✨",
 "Tuma hasi sabuthu best feeling 😊"
];

function newCompliment(){
  document.getElementById("compliment").innerText =
    compliments[Math.floor(Math.random()*compliments.length)];
}

/* FIREWORKS */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

class Particle{
  constructor(x,y,color){
    this.x=x;
    this.y=y;
    this.color=color;
    this.radius=Math.random()*2+1;
    this.speedX=(Math.random()-0.5)*6;
    this.speedY=(Math.random()-0.5)*6;
    this.life=100;
  }
  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;
    this.life--;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fillStyle=this.color;
    ctx.fill();
  }
}

let particles=[];

function explode(){
  const x=Math.random()*canvas.width;
  const y=Math.random()*canvas.height/2;
  const colors=["#ff4f81","#ffc75f","#845ec2","#00c9a7","#f9f871"];
  for(let i=0;i<60;i++){
    particles.push(new Particle(x,y,colors[Math.floor(Math.random()*colors.length)]));
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p,i)=>{
    p.update();
    p.draw();
    if(p.life<=0) particles.splice(i,1);
  });
  requestAnimationFrame(animate);
}
animate();

setTimeout(()=>{
  explode();
  setInterval(explode,1200);
},6000);
