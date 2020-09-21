/*
 * @Author: your name
 * @Date: 2020-09-18 14:00:02
 * @LastEditTime: 2020-09-21 13:42:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\core\instance\render-helpers\resolve-slots.js
 */
/* @flow */

import type VNode from 'core/vdom/vnode'

/**
 * 用于将原始子vNode解析为slot对象的运行时帮助程序.
 */
export function resolveSlots (
  children: ?Array<VNode>,
  context: ?Component
): { [key: string]: Array<VNode> } {
  if (!children || !children.length) {
    return {}
  }
  const slots = {}
  for (let i = 0, l = children.length; i < l; i++) {
    const child = children[i]
    const data = child.data
    // 如果节点解析为Vue插槽节点，请删除插槽属性
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot
    }
    // 仅当vnode在同一上下文中呈现时，才应考虑命名槽。
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      const name = data.slot
      const slot = (slots[name] || (slots[name] = []))
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || [])
      } else {
        slot.push(child)
      }
    } else {
      (slots.default || (slots.default = [])).push(child)
    }
  }
  // 忽略只包含空白的插槽
  for (const name in slots) {
    if (slots[name].every(isWhitespace)) {
      delete slots[name]
    }
  }
  return slots
}

function isWhitespace (node: VNode): boolean {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}
