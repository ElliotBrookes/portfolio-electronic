import anime from 'animejs'

export function buttonEnlarge(self, scale){
  return anime({
    targets: self,
    scale: scale
  })
}

export function buttonShrink(self){
  return anime({
    targets: self,
    scale: 1
  })
}
