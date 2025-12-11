// Markdown Bold Parser
// Given a string that may include some bold text in Markdown, return the equivalent HTML string.

// Bold text in Markdown is any text that starts and ends with two asterisks (**) or two underscores (__).
// There cannot be any spaces between the text and the asterisks or underscores, but there can be spaces in the text itself.
// Convert all bold occurrences to HTML b tags and return the string.
// For example, given "**This is bold**", return "<b>This is bold</b>".

// Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

function parseBold(markdown) {
  console.log(markdown);
  // split into arr
  const arr = markdown.split('');
  console.log(arr);
  // or just regex it..
  // write a regex pattern that matches two ** or two __
  // const regex = /^[\*{2}]/
  // swap out the ** or __ for <b> & </b>
  // the regex pattern must start with
  // ** or __
  // const regex = /^[\*{2}|\_{2}]/
  // followed by a-z
  // then spaces & a-z
  // and must end with ** or __
  // const regex = /^[\*{2}|\_{2}][a-z]+[\d*][\*{2}|\_{2}]$/gi

  // tested regex
  // const regex = /^[\*]{2}|[\_]{2}|[a-z]+|[\s]+|[a-z]+[\*]{2}|[\_|\*]{2}$/gi
  return markdown;
}

parseBold('**This is bold**');
// returns "<b>This is bold</b>"
parseBold('__This is also bold__');
// returns "<b>This is also bold</b>"
parseBold('**This is not bold **');
// returns "**This is not bold **"
parseBold('__ This is also not bold__');
// returns "__ This is also not bold__"
parseBold('The **quick** brown fox __jumps__ over the **lazy** dog.');
// returns "The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog."
