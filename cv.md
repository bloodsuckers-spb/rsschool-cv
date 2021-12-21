## Bakov Vitaly

### Frontend developer

### CONTACTS: 

* Phone: +79500123422
* Telegram: @bakov_vitaly
* Dischord: @bloodsuckers-spb#9863

### BRIEFLY ABOUT MYSELF:

Currently, I taking Frontend Dev course at the RSS school. I entirely focus on web development now. I'm working on the projects for my portfolio. And I looking for a job as junior frontend developer. Actually, I have a technical background. I worked as a Cam-programmer/process engineer. My tasks included writting control programs in Cam-systems for the subsequent processing of details on CNC equipment.

### SKILLS: 

* HTML5
* CSS3
* JavaScript
* React
* SCSS
* BEM
* Git
* Webpack
* Figma

### CODE EXAMPLE: 

```
function revrot(str, sz) {
  if (sz < 1  || sz > str.length){
    return '';
  } 
  return chunksCreate(str, sz);
}

function chunksCreate(str, sz) {
  const reg = new RegExp(
    `.{1,${sz}}`,"g"
    );
  const chunksArr = str.match(reg)
  .filter(el => el.length === sz); 
  return (
    chunksTransform(chunksArr);
  ) 
}

function chunksTransform(chunks) {
  let out = '';

  for (let el of chunks) {
    const arr = Array.from(el)
    .map(el => +el);
    const sum = arr.reduce((acc, el)=>{
      return acc+el;
    });
    if (sum % 2 === 0) {
      out += reverse(el)
    } 
    else {
      out += rotate(el)
    }
  }

  return out;
}
  
function reverse(s) {
    return (
        s.split('')
        .reverse()
        .join('')
    );
}

function rotate(s) {
    return (
        s.slice(1) + s.slice(0, 1)
    );
}
```
### WORK EXPERIENCE: 

I have no commercial work experience as a frontend developer. Currently, I working on projects for my portfolio.
You can see examples of my projects below

[Pomodoro Timer](https://bloodsuckers-spb.github.io/advent-of-js/day1/ "Pomodoro Timer")

[Password Verifier](https://bloodsuckers-spb.github.io/advent-of-js/day10/ "Password Verifier")

[Calendar Viewer](https://bloodsuckers-spb.github.io/advent-of-js/day14/ "Calendar Viewer")

[Star Rating](https://bloodsuckers-spb.github.io/advent-of-js/day16/ "Star Rating")

### EDUCATION: 

- Frontend dev of RSS school (Currently)
- Js and React courses of itGid.info
- Freecodecamp and learn.javascript

### ENGLISH SKILLS: B1+

I have a good language base. But Now I'm going to improve my English skills to fluency. You can check my current level in the video above.