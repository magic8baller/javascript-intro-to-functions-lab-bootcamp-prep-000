function shout(string) {
  return string.toUpperCase;
}

shout('hello');


function whisper(string) {
  return string.toLowerCase();
}

whisper('HeLLo');


function logShout(string) {
  return string.toUpperCase();
}

logShout('HeLLo');


function logWhisper(string) {
  return string.toLowerCase();
}

logWhisper('hEllO');


function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return 'I can\'t hear you!';
  }
  else if (string === string.toUpperCase()) {
    return 'YES INDEED!';
  }
  else if (string === 'I love you.'); {
    return 'I love you, too.';
  }
}

sayHiToGrandma('hello');
sayHiToGrandma('HELLO');
sayHiToGrandma('I love you.');