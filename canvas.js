window.addEventListener("contextmenu", (e) => e.preventDefault());

const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 120;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const pallets = [
  ["#FFDBE1", "#E8C8DD", "#FDE9FF", "#DCC8E8", "#E9DBFF"],
  ["#EF4665", "#F69B9A", "#FBCEAD", "#C7C7AC", "#84AF9C"],
  ["#D9A0A5", "#F2C9D1", "#F2D4C9", "#E0A2A6", "#F2F2F2"],
  ["#FD5901", "#F78104", "#FAAB36", "#249EA0", "#008083"],
  ["#0B2B40", "#30A5BF", "#E9C46A", "#F4A261", "#E76F51"],
  ["#FFD74B", "#FFC038", "#FFEDDA", "#000046", "#BFBFBF"],
  ["#1D5953", "#51A69D", "#F2BF27", "#F28705", "#D95204"],
  ["#ABA993", "#6B6A5C", "#EBE8CA", "#F7F4D5", "#D1CFB4"],
  ["#EFD3CD", "#BB716F", "#953C3C", "#EBB6B3", "#F0D3CE"],
  ["#9776E6", "#83B4DF", "#61DBB7", "#A2E68A", "#F0F04F"],
  ["#01A1B1", "#1FBFCB", "#B6CBCD", "#FAD8CE", "#FEE5DD"],
  ["#8C0335", "#D9487D", "#A3CFD9", "#F2B544", "#F2C2C2"],
  ["#021D40", "#043F8C", "#F2F2F2", "#F2CB05", "#F2421B"],
  ["#002664", "#146CFD", "#8CE0FF", "#FAAF05", "#F3631B"],
  ["#67002D", "#A10043", "#003751", "#024967", "#E5E6E5"],
  ["#CC6D58", "#E18777", "#F8A08C", "#F2CCB5", "#F7E8D0"],
  ["#11BAFD", "#FD636B", "#FFB900", "#3BE8B0", "#6967CE"],
  ["#4D5259", "#626B73", "#79838C", "#9FB3BF", "#8D9CA6"],
  ["#F2C094", "#D97E6A", "#8C423B", "#402020", "#262626"],
  ["#F0F0F0", "#DCE3F7", "#D6BADE", "#F5DBD7", "#F5E8CE"],
  ["#99B3D4", "#D5C2DD", "#F2F2F2", "#B9E6EC", "#EBD0DE"],
  ["#F2C2CF", "#F2AEDB", "#CABFD9", "#BBADD9", "#AEA3D9"],
  ["#E6F699", "#FFC79F", "#FF787A", "#94D4C5", "#FF6CCD"],
  ["#4E393A", "#6B4F3E", "#DB663D", "#B2AF73", "#FCDCBF"],
  ["#8DA6A6", "#344039", "#BBBFAA", "#A68D77", "#D9C6BF"],
  ["#7AACBF", "#9CC8D9", "#F2D0BD", "#F2AFA0", "#D99696"],
  ["#67002D", "#A10046", "#003751", "#024967", "#FFFA73"],
  ["#0A2C59", "#082A40", "#F2F2F0", "#8C8072", "#F2B4AE"],
  ["#685782", "#311D4F", "#2B2436", "#513082", "#A68ACF"],
  ["#B3F5D6", "#CEE9F5", "#F2F5B5", "#F5A89D", "#F5D2A9"],
  ["#FFCA8C", "#C6C09C", "#FEB183", "#F5CEC7", "#E89698"],
  ["#D9831A", "#D9A76A", "#BF6415", "#8C501B", "#732E1F"],
  ["#D2291A", "#595A61", "#889099", "#D5DBDE", "#FDFBF4"],
  ["#274D5B", "#46988E", "#F8E181", "#FAAC6A", "#D46D4F"],
  ["#F5F0E6", "#E0CCCC", "#AAB6CC", "#8D8D9E", "#A3ADA6"],
  ["#824D70", "#CAD8FA", "#FDFFF5", "#525F82", "#CCC53F"],
  ["#4A407C", "#6F88C8", "#F2EC9B", "#F2BC79", "#F2856D"],
  ["#202020", "#E7DDDD", "#807A73", "#FF682C", "#C1B9B2"],
  ["#D92546", "#184A8C", "#7AA638", "#FFCF03", "#F2B807"],
  ["#2182BF", "#04B2D9", "#F2CB07", "#F2DC6B", "#F2F2F2"],
  ["#A8184C", "#5C0424", "#EAD5CD", "#0D4D5C", "#0F8BA8"],
  ["#C6CBC4", "#E0E9DC", "#A6B59F", "#6D7E65", "#EAEDEE"],
  ["#E8D3C5", "#F5E4C4", "#FFE7CC", "#FFD8CC", "#F5C8C4"],
  ["#6AA2A6", "#8D9FB6", "#F1D8DB", "#ED949C", "#E3849A"],
  ["#01060A", "#414447", "#808284", "#BFC1C2", "#F2F3F3"],
  ["#FEA396", "#FCA2D5", "#E6878E", "#E287E6", "#DE96FE"],
  ["#A89488", "#FFFFFF", "#F4E5DD", "#77A8A6", "#DFF5F4"],
  ["#573B8F", "#BD9CFF", "#9370DB", "#8F892C", "#DBD570"],
  ["#FCD0B1", "#E0DBC5", "#E1F5C8", "#ABDEC4", "#DBF1FF"],
  ["#F599B9", "#DA7690", "#FFFFFF", "#D64C84", "#993760"],
  ["#67002D", "#A10043", "#003751", "#024967", "#E5E6E5"],
  ["#354B8C", "#4478A6", "#50D4F2", "#F2A057", "#F27B35"],
  ["#99A8AE", "#D9B3B0", "#400101", "#A63333", "#BF5A5A"],
  ["#B1D4D0", "#8AADAF", "#F49600", "#465A59", "#E14733"],
  ["#275059", "#A8BBBF", "#8C3B0D", "#D96A29", "#BF3604"],
  ["#483176", "#6FABE7", "#95B773", "#F2E18D", "#F6C95E"],
  ["#324759", "#F3E0BE", "#B19F8A", "#FEFEFE", "#687A86"],
  ["#D93B58", "#F27289", "#1B3C59", "#A9D9D9", "#F2F2F2"],
  ["#F47119", "#FFAA2A", "#FFE6D4", "#FFEED2", "#FCFCFD"],
  ["#FC0015", "#5B061D", "#1A0C39", "#04C3E8", "#ABFFFF"],
  ["#D99C9C", "#734F56", "#A66576", "#A6A192", "#F2C7BD"],
  ["#8CDBFF", "#FFB8E5", "#F7FFFA", "#FFA8E5", "#8FD8FF"],
  ["#F59E47", "#FF894A", "#E86E4F", "#FF534A", "#F5477E"],
  ["#505943", "#EDF2E6", "#9CA68D", "#533A59", "#A18DA6"],
  ["#9E4493", "#F2AEC1", "#727FB4", "#157C55", "#DE6856"],
  ["#DFCEC8", "#607A92", "#A4BBB6", "#D49A33", "#C67240"],
  ["#7DCBF5", "#90DECA", "#FFE24F", "#D9B95B", "#F79131"],
  ["#FFFFFF", "#FFE8E5", "#EABFB9", "#CE897B", "#731719"],
  ["#0B368C", "#295FA6", "#E5D5D4", "#D9D9D9", "#737373"],
  ["#323D75", "#2E7575", "#EBCC63", "#DA8551", "#323D75"],
  ["#B6CEE3", "#E7D1FE", "#FACEDD", "#FCE7A7", "#FFFFA7"],
  ["#7916DB", "#DB16C9", "#D6DB00", "#8BDB00", "#3EDB00"],
  ["#F2EEE6", "#D9D1C5", "#999996", "#696566", "#CFA4A3"],
  ["#1D2F59", "#FDFBF0", "#F2A74B", "#F28749", "#BF6C4E"],
  ["#F4ECA5", "#FFFBD4", "#747474", "#AFAFAF", "#E6E6E6"],
  ["#BFA7F2", "#D6C9F2", "#222177", "#B188E5", "#C1BFEA"],
  ["#000000", "#FFFFFF", "#00583D", "#006D3D", "#338A4C"],
  ["#F5B2A4", "#D4909A", "#EBACE5", "#BC90D4", "#BBA8F7"],
  ["#BF343F", "#2585D9", "#F2CF63", "#261201", "#F28627"],
  ["#EEC7BF", "#252063", "#6DA3A3", "#DED3C0", "#EB6F65"],
  ["#408DA1", "#8FAAB0", "#BFB9B0", "#18181A", "#4DFFF3"],
  ["#ED6BA8", "#A13869", "#EDE06D", "#53D9ED", "#4094A1"],
  ["#8B66A9", "#F8ACC6", "#CC6F87", "#000000", "#FFFFFC"],
  ["#333333", "#707070", "#F0F0F0", "#FCFCFC", "#D6D6D6"],
  ["#995F08", "#FFAD33", "#E69416", "#005799", "#178DE6"],
  ["#1C58A6", "#079DD9", "#F27D16", "#F25922", "#F2F2F2"],
  ["#B2A4BF", "#2A2859", "#393859", "#B1BF41", "#D8D9B4"],
  ["#111C26", "#5C6A73", "#BFAF9B", "#AE7874", "#735151"],
  ["#BF6B82", "#484F73", "#789EBF", "#F2DF7E", "#F2D3D0"],
  ["#3E6488", "#6EA0C3", "#F7C958", "#E9DFD6", "#F0847A"],
  ["#A69595", "#F2F2DA", "#DAE9F2", "#959FA6", "#F2F2F2"],
  ["#D90416", "#F27983", "#D9042B", "#038C73", "#D9CE3D"],
  ["#733944", "#AABFBD", "#F2F2F0", "#262014", "#997864"],
  ["#4D9413", "#A1FF54", "#82E034", "#890494", "#D334E0"],
  ["#144659", "#38BDF2", "#F21616", "#590B0B", "#0D0D0D"],
  ["#B1D4D0", "#8AADAF", "#F47B00", "#465A59", "#E14733"],
  ["#612000", "#E67A45", "#E04B00", "#61341D", "#AD3A00"],
  ["#FFFFFF", "#D9A282", "#8C533E", "#D99982", "#734C4C"],
  ["#FEA1A8", "#FFD4AA", "#FFFA42", "#24B6E1", "#625E6D"],
  ["#0AA7FE", "#09D1E6", "#09E67F", "#0AFE47", "#17FCD2"],
];

var pallet = pallets[Math.floor(Math.random() * pallets.length)];

const mouse = {
  x: undefined,
  y: undefined,
  down: false,
  radius: 10,
};

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x - 120;
  mouse.y = event.y;
});
canvas.addEventListener("touchmove", (event) => {
  mouse.x = event.x - 120;
  mouse.y = event.y;
});

canvas.addEventListener("wheel", (event) => {
  mouse.radius += event.deltaY > 0 ? -2 : 2;
  if (mouse.radius < 10) {
    mouse.radius = 10;
  }
});

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = Math.random() > 0.5 ? dx : -dx;
    this.dy = Math.random() > 0.5 ? dy : -dy;
    this.radius = radius;
    this.initialRadius = radius;
    this.colors = pallet.slice(1);
    this.initialColor = this.color = this.colors[Math.floor(Math.random() * 4)];
    this.distance = 50;

    this.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.initialColor;
      ctx.fill();
    };

    this.update = function () {
      if (this.x <= 0 + this.radius || this.x >= canvas.width - this.radius)
        this.dx = -this.dx;
      if (this.y <= 0 + this.radius || this.y >= canvas.height - this.radius)
        this.dy = -this.dy;
      this.x += this.dx;
      this.y += this.dy;

      this.distanceToMouse = () => {
        let xDistance = mouse.x - this.x;
        let yDistance = mouse.y - this.y;
        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
      };

      if (this.distanceToMouse() < mouse.radius && mouse.down) {
        this.radius += this.radius < mouse.radius / 2 ? 8 : 0;
      } else if (this.radius > this.initialRadius) {
        this.radius -= this.radius * 0.01;
      } else {
        this.radius = 0;
      }

      if (this.distanceToMouse() < mouse.radius && mouse.erase) {
        if (this.radius > this.initialRadius) {
          this.radius = 0;
        }
      }

      this.draw();
    };

    this.pickColor = () => {
      this.colors = pallet.slice(1);
      this.initialColor = this.colors[Math.floor(Math.random() * 4)];
    };
  }
}

var circle1 = new Circle(100, 75, 4, 4, 30);
var circles = [];
for (var i = 0; i < 500; i++) {
  let x = Math.random() * (canvas.width - 120) + 30;
  let y = Math.random() * (canvas.height - 120) + 30;
  let dx = Math.random() * 3;
  let dy = Math.random() * 3;
  let radius = Math.random() * 2 + 1;
  circles.push(new Circle(x, y, dx, dy, radius));
}

const handleChangeColor = () => {
  pallet = pallets[Math.floor(Math.random() * pallets.length)];
  circles.forEach((c) => c.pickColor());
};

canvas.addEventListener("mousedown", (e) => {
  if (e.button === 0) mouse.down = true;
  if (e.button === 2) mouse.erase = true;
});
canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  if (e.button === 0) mouse.down = true;
  if (e.button === 2) mouse.erase = true;
});

canvas.addEventListener("mouseup", (e) => {
  if (e.button === 0) mouse.down = false;
  if (e.button === 2) mouse.erase = false;
});
canvas.addEventListener("touchend", (e) => {
  e.preventDefault();
  if (e.button === 0) mouse.down = false;
  if (e.button === 2) mouse.erase = false;
});

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = pallet[0];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  circles.forEach((circle) => circle.update());

  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
  ctx.strokeStyle = "black";
  ctx.stroke();
}

animate();
