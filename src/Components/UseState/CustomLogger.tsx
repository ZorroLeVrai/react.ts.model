class CustomLogger
{
  constructor(private doesLog: boolean)
  {}

  log(text: string)
  {
    if (this.doesLog)
      console.log(text);
  }
}

export default CustomLogger;