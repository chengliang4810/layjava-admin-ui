/**
 * @description Some common rules
 * @link https://any-rule.vercel.app/
 */

export enum Regex {
  Url = '^(((ht|f)tps?):\\\/\\\/)?([^!@#$%^&*?.\\s-]([^!@#$%^&*?.\\s]{0,63}[^!@#$%^&*?.\\s])?\\.)+[a-z]{2,6}\\\/?',

  Email = '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',

  RouteName = '^[\\w_!@#$%^&*~-]+$',
}
