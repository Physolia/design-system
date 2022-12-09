/*
 * Medicare.gov CMSDS Component Theme
 */

import { default as t } from './medicare'
import { hexOpacity } from '../lib/utility'
import { AnyTokenValues } from '../lib/types'

export const components: AnyTokenValues = {
  'accordion': {
    '__color':                                    t.color['base'],
    '__background-color':                         t.color['gray-lightest'],
    '__background-color--hover':                  t.color['gray-lighter'],
    '__border-color':                             t.color['gray-lightest'],
    '-button__color':                             t.color['base'],
    '-content__background-color':                 t.color['white'],
  },

  'alert': {
    '__background-color':                         t.color['secondary-lightest'],
    '__background-color--error':                  t.color['error-lightest'],
    '__background-color--lightweight':            t.color['white'],
    '__background-color--success':                t.color['success-lightest'],
    '__background-color--warn':                   t.color['warn-lightest'],
    '__border-left-color':                        t.color['secondary'],
    '__border-color--error':                      t.color['error'],
    '__border-color--success':                    t.color['success'],
    '__border-color--warn':                       t.color['warn'],
    '__font-color':                               t.color['base'],
    '__icon-size':                                t.spacer['5'],
    '__padding':                                  t.spacer['2'],
    '-bar__width':                                t.spacer['1'],
    '-link__font-color':                          t.color['secondary'],
    '-link__font-color--hover':                   t.color['secondary-dark'],
    '-link__font-color--focus':                   t.color['secondary-darkest'],
    '-link__font-color--active':                  t.color['secondary-darkest'],
  },
  
  'autocomplete': {
    '__background-color':                         t.color['white'],
    '__border-color':                             t.color['gray-lighter'],
    '-item__font-color':                          t.color['primary'],
    '-item__background-color--active':            t.color['secondary-darkest'],
    '-item__font-color--active':                  t.color['white'],
    '-item-message__font-color':                  t.color['muted'],
  },
  
  'badge': {
    '__background-color':                         t.color['gray'],
    '__background-color--alert':                  t.color['error'],
    '__background-color--info':                   t.color['primary'],
    '__background-color--success':                t.color['success'],
    '__background-color--warn':                   t.color['warn'],
    '__font-color':                               t.color['white'],
    '__font-color--warn':                         t.color['base'],
  },

  'button': {
    '__background-color--active':                 t.color['white'],
    '__background-color--disabled':               t.color['white'],
    '__background-color--hover':                  t.color['secondary-dark'],
    '__background-color':                         t.color['white'],
    '__border-color--active':                     t.color['secondary-light'],
    '__border-color--disabled':                   'currentColor',
    '__border-color--hover':                      t.color['secondary-dark'],
    '__border-color':                             'currentColor',
    '__border-radius':                            t.radius['default'],
    '__border-width':                             '1px',
    '__color--active':                            t.color['secondary-light'],
    '__color--disabled':                          t.color['gray-lighter'],
    '__color--hover':                             t.color['white'],
    '__color':                                    t.color['secondary'],
    '__font-weight':                              t.font['weight-normal'],
    '-icon__fill':                                'currentColor',
  },

  'button-alt': {
    '__background-color--active':                 t.color['white'],
    '__background-color--disabled':               t.color['white'],
    '__background-color--hover':                  t.color['primary-dark'],
    '__background-color':                         t.color['white'],
    '__border-color--active':                     t.color['primary-light'],
    '__border-color--disabled':                   'currentColor',
    '__border-color--hover':                      t.color['primary-dark'],
    '__border-color':                             'currentColor',
    '__color--active':                            t.color['primary-light'],
    '__color--disabled':                          t.color['gray-lighter'],
    '__color--hover':                             t.color['white'],
    '__color':                                    t.color['primary'],
  },

  'button-dark': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     'currentColor',
    '__border-color--disabled':                   'currentColor',
    '__border-color--hover':                      'currentColor',
    '__border-color':                             'currentColor',
    '__color--active':                            t.color['gray-lighter'],
    '__color--disabled':                          t.color['gray'],
    '__color--hover':                             t.color['gray-lightest'],
    '__color':                                    t.color['white'],
  },

  'button-dark-alt': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     'currentColor',
    '__border-color--disabled':                   'currentColor',
    '__border-color--hover':                      'currentColor',
    '__border-color':                             'currentColor',
    '__color--active':                            t.color['secondary-light'],
    '__color--disabled':                          t.color['gray'],
    '__color--hover':                             t.color['secondary-lighter'],
    '__color':                                    t.color['secondary-lightest'],
  },

  'button-solid': {
    '__background-color--active':                 t.color['primary-light'],
    '__background-color--disabled':               t.color['gray-lighter'],
    '__background-color--hover':                  t.color['primary-dark'],
    '__background-color':                         t.color['primary'],
    '__border-color--active':                     t.color['primary-light'],
    '__border-color--disabled':                   t.color['gray-lighter'],
    '__border-color--hover':                      t.color['primary-dark'],
    '__border-color':                             t.color['primary'],
    '__color--active':                            t.color['white'],
    '__color--disabled':                          t.color['gray-dark'],
    '__color--hover':                             t.color['white'],
    '__color':                                    t.color['white'],
  },

  'button-solid-alt': {
    '__background-color--active':                 t.color['secondary-light'],
    '__background-color--disabled':               t.color['gray-lighter'],
    '__background-color--hover':                  t.color['secondary-dark'],
    '__background-color':                         t.color['secondary'],
    '__border-color--active':                     t.color['secondary-light'],
    '__border-color--disabled':                   t.color['gray-lighter'],
    '__border-color--hover':                      t.color['secondary-dark'],
    '__border-color':                             t.color['secondary'],
    '__color--active':                            t.color['white'],
    '__color--disabled':                          t.color['gray-dark'],
    '__color--hover':                             t.color['white'],
    '__color':                                    t.color['white'],
  },

  'button-solid-dark': {
    '__background-color--active':                 t.color['white'],
    '__background-color--disabled':               t.color['gray-lighter'],
    '__background-color--hover':                  t.color['primary-dark'],
    '__background-color':                         t.color['white'],
    '__border-color--active':                     t.color['white'],
    '__border-color--disabled':                   t.color['gray-lighter'],
    '__border-color--hover':                      t.color['primary-dark'],
    '__border-color':                             t.color['white'],
    '__color--active':                            t.color['primary-light'],
    '__color--disabled':                          t.color['base'],
    '__color--hover':                             t.color['white'],
    '__color':                                    t.color['primary'],
  },

  'button-solid-dark-alt': {
    '__background-color--active':                 t.color['white'],
    '__background-color--disabled':               t.color['gray-lighter'],
    '__background-color--hover':                  t.color['secondary-dark'],
    '__background-color':                         t.color['white'],
    '__border-color--active':                     t.color['white'],
    '__border-color--disabled':                   t.color['gray-lighter'],
    '__border-color--hover':                      t.color['secondary-dark'],
    '__border-color':                             t.color['white'],
    '__color--active':                            t.color['secondary-light'],
    '__color--disabled':                          t.color['base'],
    '__color--hover':                             t.color['white'],
    '__color':                                    t.color['secondary'],
  },

  'button-ghost': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     'transparent',
    '__border-color--disabled':                   'transparent',
    '__border-color--hover':                      'transparent',
    '__border-color':                             'transparent',
    '__color--active':                            t.color['secondary-light'],
    '__color--disabled':                          t.color['gray-lighter'],
    '__color--hover':                             t.color['secondary-dark'],
    '__color':                                    t.color['secondary'],
  },

  'button-ghost-alt': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     'transparent',
    '__border-color--disabled':                   'transparent',
    '__border-color--hover':                      'transparent',
    '__border-color':                             'transparent',
    '__color--active':                            t.color['primary-light'],
    '__color--disabled':                          t.color['gray-lighter'],
    '__color--hover':                             t.color['primary-darker'],
    '__color':                                    t.color['primary'],
  },

  'button-ghost-dark': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     'transparent',
    '__border-color--disabled':                   'transparent',
    '__border-color--hover':                      'transparent',
    '__border-color':                             'transparent',
    '__color--active':                            t.color['gray-lighter'],
    '__color--disabled':                          t.color['gray'],
    '__color--hover':                             t.color['gray-lightest'],
    '__color':                                    t.color['white'],
  },

  'button-ghost-dark-alt': {
    '__background-color--active':                 'transparent',
    '__background-color--disabled':               'transparent',
    '__background-color--hover':                  'transparent',
    '__background-color':                         'transparent',
    '__border-color--active':                     'transparent',
    '__border-color--disabled':                   'transparent',
    '__border-color--hover':                      'transparent',
    '__border-color':                             'transparent',
    '__color--active':                            t.color['gray-lighter'],
    '__color--disabled':                          t.color['gray'],
    '__color--hover':                             t.color['gray-lightest'],
    '__color':                                    t.color['white'],
  },
  
  'choice': {
    '__background-color':                         t.color['background'],
    '__background-color--checked':                t.color['secondary'],
    '__background-color--disabled':               t.color['gray-lighter'],
    '__background-color--inverse':                t.color['transparent'],
    '__background-color--disabled--inverse':      hexOpacity(t.color['muted-inverse'], 0.15),
    '__border-color':                             t.color['gray'],
    '__border-color--checked':                    t.color['secondary'],
    '__border-color--disabled':                   t.color['gray-medium-light'],
    '__border-color--error':                      t.color['error'],
    '__border-color--inverse':                    t.color['white'],
    '__border-color--left':                       t.color['primary'],
    '__border-color--focus':                      t.color['primary-darker'],
    '__border-color--disabled--inverse':          t.color['gray-medium-light'],
    '__border-radius':                            t.radius['default'],
    '__border-width':                             '2px',
    '__color--unchecked':                         t.color['white'],
    '__color--disabled':                          t.color['muted'],
    '__size':                                     t.spacer['3'],
    '__size--small':                              '20px',
    '__size-radio':                               t.spacer['2'],
    '__size-radio--small':                        '12px',
    '-label__color--disabled':                    t.color['muted'],
    '-label__color--disabled--inverse':           t.color['muted-inverse'],
  },
  
  'dialog': {
    '__background-color':                         t.color['white'],
    '__padding':                                  t.spacer['4'],
    '-overlay__background-color':                 t.color['background-dialog-mask'],
  },
  
  'drawer': {
    '__animation-timing':                         t.animation['speed-2'],
    '__background-color':                         t.color['background'],
    '__border-color':                             t.color['border'],
    '-close__color':                              t.color['black'],
    '-header__background-color':                  t.color['gray-lightest'],
    '-footer__background-color':                  t.color['secondary-lightest'],
    '-toggle__background-color--hover':           t.color['secondary'],
    '-toggle__color--hover':                      t.color['white'],
    '-toggle__background-color--hover--inverse':  t.color['white'],
    '-toggle__color--hover--inverse':             t.color['gray-darker'],
  },
  
  'dropdown': {
    '__background-color':                         t.color['white'],
    '__icon-size':                                '10px',
  },
  
  'filter-chip': {
    '__border-radius':                            t.radius['pill'],
    '__background-color':                         t.color['secondary-lightest'],
    '__border-color':                             t.color['primary'],
    '__color':                                    t.color['base'],
    '__background-color--active':                 t.color['primary'],
    '__border-color--active':                     t.color['primary'],
    '__color--active':                            t.color['white'],
    '-icon__color':                               t.color['base'],
    '-icon__color-active':                        t.color['white'],
  },
  
  'form': {
    '-label__color--inverse':                     t.color['base-inverse'],
    '-label__color--not-error':                   t.color['gray-light'], 
    '__max-width':                                '460px',
    '__max-width--small':                         '6em',
    '__max-width--medium':                        '12em',
    '-hint__color':                               t.color['muted'],
    '-hint__color--inverse':                      t.color['muted-inverse'],
    '-error__color':                              t.color['error'],
    '-error__color--inverse':                     t.color['error-light'],
  },

  'icon': {
    '__color__error':                             t.color['error'],
    '__color--inverse':                           t.color['white'],
    '__color--primary':                           t.color['primary'],
    '__color--success':                           t.color['success'],
    '__color--warn':                              t.color['warn'],
  },
  
  'link': {
    '__color':                                    t.color['secondary'],
    '__color--active':                            t.color['secondary-dark'],
    '__color--hover':                             t.color['secondary-dark'],
    '__color--visited':                           t.color['visited'],
    '-inverse__color':                            t.color['base-inverse'],
    '-inverse__color--active':                    t.color['gray-lighter'],
    '-inverse__color--hover':                     t.color['gray-lighter'],
    '-inverse__color--visited':                   t.color['gray-lighter'],
    '__text-decoration-offset':                   '3px',
    '__text-decoration-thickness':                '1px',
    '__text-decoration-thickness--hover':         '2px',
  },
  
  'pagination': {
    '-link__color':                               t.color['primary'],
    '-link__color--hover':                        t.color['primary-darker'],
    '-link__color--active':                       t.color['primary-darkest'],
    '-link__color--focus':                        t.color['primary-darker'],
    '-link__color--disabled':                     t.color['gray-lighter'],
    '-current-page__color':                       t.color['base'],
    '-overflow__color':                           t.color['gray'],
    '-page-count__color':                         t.color['gray'],
  },
  
  'review': {
    'review__border-color':                       t.color['border'],
  },
  
  'steplist': {
    '__color':                                    t.color['muted'],
    '__color--current':                           t.color['primary'],
    '__background-color--current':                t.color['primary'],
    '-step__color':                               t.color['muted'],
    '-step__border-color':                        t.color['border'],
    '-step__border-color--default':               t.color['muted'],
    '-step__color--current':                      t.color['white'],
    '-step__color--completed':                    t.color['base'],
    '-step__background-color--completed':         t.color['base'],
  },
  
  'spinner': {
    '__background-color':                         t.color['background'],
    '__color':                                    t.color['base'],
    '__background-color--inverse':                t.color['background-inverse'],
    '__color--inverse':                           t.color['white'],
  },

  'table': {
    '__padding':                                  t.spacer['2'],
    '__border-color':                             t.color['black'],
    '-header__background-color':                  t.color['gray-lightest'],
    '-striped__background-color':                 t.color['gray-lightest'],
    '-striped-header__background-color':          t.color['gray-lightest'],
  },

  'tabs': {
    '__border-color':                             t.color['border'],
    '__background-color':                         t.color['background'],
    '__color':                                    t.color['base'],
    '-selected__background-color':                t.color['primary'],
    '-selected__border-color':                    t.color['white'],
    '-selected__color':                           t.color['primary'],
    '-selected__border-color--active':            t.color['primary'],
    '__color--hover':                             t.color['primary'],
    '__color--active':                            t.color['primary-darker'],
    '__background-color--disabled':               t.color['gray-lighter'],
    '__border-color--disabled':                   t.color['gray-lighter'],
    '__color--disabled':                          t.color['gray-dark'],
  },
  
  'text-input': {
    '__line-height':                              '1.3',
    '__background-color--disabled':               t.color['gray-lighter'],
    '__border-width':                             '2px',
    '__border-width--error':                      '3px',
    '__border-width--success':                    '3px',
    '__border-color':                             t.color['gray-light'],
    '__border-color--disabled':                   t.color['gray-warm-dark'],
    '__border-color--error':                      t.color['error'],
    '__border-color--error--inverse':             t.color['error-light'],
    '__border-color--inverse':                    t.color['black'],
    '__border-color--success':                    t.color['success-light'],
    '__color':                                    t.color['gray-warm-dark'],
    '__padding':                                  t.spacer['1'],
    '__border-radius':                            '3px',
  },

  'tooltip': {
    '__background-color':                         t.color['background'],
    '__border-color':                             t.color['gray-dark'],
    '__color':                                    t.color['base'],
    '__box-shadow-color':                         t.color['gray-light'],
    '-icon__color':                               t.color['primary'],
    '-icon__color--inverse':                      t.color['white'],
    '-trigger__color':                            t.color['base'],
  },

  'typography': {
    '-heading__font-family':                      t.font['family-montserrat'],
    '-heading__font-weight':                      t.font['weight-semibold'],
    '-heading-4xl__font-weight':                  t.font['weight-semibold'],
    '-heading-3xl__font-weight':                  t.font['weight-semibold'],
    '-heading-lg__font-weight':                   t.font['weight-semibold'],
    '-heading-md__font-weight':                   t.font['weight-semibold'],
    '-heading-sm__font-weight':                   t.font['weight-semibold'],
    '-body__font-family':                         t.font['family-rubik'],
  },

  'usa-banner': {
    '__background-color':                         t.color['gray-lightest'],
    '__color':                                    t.color['black'],
    '-close__background-color':                   t.color['gray-medium-light'],
    '-action__color':                             t.color['primary-darker'],
    '-lock-icon__color':                          t.color['success-light'],
  },
  
  'vertical-nav': {
    '-item__background-color--hover':             t.color['gray-lightest'],
    '-item__color--hover':                        t.color['primary'],
    '-item__border-color':                        t.color['gray'],
    '-label__color':                              t.color['base'],
    '-label-icon__color':                         t.color['base'],
    '-label__border-color--current':              t.color['primary'],
    '-label__color--current':                     t.color['primary'],
  },
}

export default components
