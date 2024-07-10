export function handlerRisizeText(text: string, length: number){
  const newText = text.length < 25 ? text : `${text.substring(0, length ? length : 20)}...`
  return newText
}