import React   from 'react'
import _ from 'lodash'

export default function Item({text , sub_text , link}) {
    let colors =['#77badc', '#d1ca71' , '#d43764' ]
    
    
    const mouse_over_handler = (e)=>{
      console.log(colors)
      colors = _.shuffle(colors)
      e.target.style.color = colors.pop()

    }

    const mouse_leave_handler=(e)=>{
      e.target.style.color='#fcffff'
    }

    return (
      <>
        <a target='_blank'  href={link} onMouseOver={mouse_over_handler}  onMouseLeave={mouse_leave_handler} class="menu__item" data-img="../assets/img1.jpg">
				<span class="menu__item-text"><span class="menu__item-textinner">{text}</span></span>
				<span class="menu__item-sub">{sub_text}</span>
			</a>
            </>
    )
}
