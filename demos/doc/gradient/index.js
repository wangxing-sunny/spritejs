const {Scene, Sprite, Gradient, Label, Path} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();
const box = new Sprite();
box.attr({
  borderWidth: 10,
  borderColor: 'blue',
  // borderColor: new Gradient({
  //   vector: [0, 0, 170, 170],
  //   colors: [
  //     {offset: 0, color: 'red'},
  //     {offset: 0.5, color: 'yellow'},
  //     {offset: 1, color: 'green'},
  //   ],
  // }),
  // borderColor: 'green',
  bgcolor: new Gradient({
    vector: [0, 150, 150, 0],
    colors: [
      {offset: 0, color: '#fff'},
      {offset: 0.5, color: 'rgba(33, 33, 77, 0.7)'},
      {offset: 1, color: 'rgba(128, 45, 88, 0.5)'},
    ],
  }),
  pos: [150, 50],
  size: [150, 150],
  borderRadius: 15,
});

layer.append(box);

const label = new Label('Hello SpriteJS~~');
label.attr({
  lineWidth: 6,
  fillColor: new Gradient({
    vector: [35, 35, 50, 350, 350, 600],
    colors: [
      {offset: 0, color: '#777'},
      {offset: 0.5, color: '#ccc'},
      {offset: 1, color: '#333'},
    ],
  }),
  pos: [500, 50],
  font: '48px Arial',
});

layer.append(label);

const path = new Path();

path.attr({
  d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
  normalize: true,
  rotate: 30,
  scale: 0.7,
  fillColor: new Gradient({
    vector: [300, 300, 100, 100],
    colors: [
      {offset: 0, color: 'red'},
      {offset: 0.5, color: 'yellow'},
      {offset: 1, color: 'green'},
    ],
  }),
  pos: [700, 360],
});

layer.append(path);