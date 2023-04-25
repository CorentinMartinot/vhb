import { Animation, AnimationController } from "@ionic/angular";

export const navTransitionAnimation = (baseElement: HTMLElement, opts: any): Animation => {
  const DURATION = 500;
  const animationCtrl = new AnimationController();

  if (opts.direction === 'forward') {
    const forwardAnimation = animationCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(DURATION)
      .easing('cubic-bezier(.87,.34,0,.73)')
      .fromTo('transform', 'translateX(300px)', 'translateX(0px)')
      .fromTo('opacity', 0, 1);

    const rootAnimation = animationCtrl
    .create()
    .addElement(opts.leavingEl)
    .duration(DURATION)
    .easing('cubic-bezier(.87,.34,0,.73)')
    .fromTo('transform', 'translateX(0px)', 'translateX(-300px)')
    .fromTo('opacity', 1, 0);

    
    return animationCtrl.create().addAnimation([forwardAnimation, rootAnimation]);
  }

  const backAnimation = animationCtrl
    .create()
    .addElement(opts.enteringEl)
    .duration(DURATION)
    .easing('ease-in')
    .fromTo('transform', 'translateX(-300px)', 'translateX(0px)')
    .fromTo('opacity', 0, 1);

  const rootAnimation = animationCtrl
    .create()
    .addElement(opts.leavingEl)
    .duration(DURATION)
    .easing('ease-out')
    .fromTo('transform', 'translateX(0px)', 'translateX(300px)')
    .fromTo('opacity', 1, 0);
  
  return animationCtrl.create().addAnimation([backAnimation, rootAnimation]);
}