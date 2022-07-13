import React from 'react'
import './AboutUs.scss'

const AboutUs = () =>{
  return(
    <>
    <section className='about_section' >
      <h6>О нас</h6>
      <div className="block_about">
        <p className='p_about' >Студенческий Совет является органом студенческого
самоуправления колледжа, который создается в целях обеспечения
реализации прав обучающихся на участие в управлении образовательным
процессом, решения важных вопросов жизнедеятельности студенческой
молодежи, развития её социальной активности, поддержки и реализации
социальных инициатив.
Студенческое самоуправление в лице органа - Студенческого
Совета осуществляет свою деятельность в соответствии с действующим
законодательством Российской Федерации, нормативно-правовыми актами
Министерства образования и науки Российской Федерации, Министерства
образования Московской области, Уставом Финансового университета,
настоящим Положением.
Студенческий Совет колледжа формируется из членов актива
студенческих групп 1-4 курса всех специальностей. 
Каждый студент колледжа имеет право быть избранным в актив
студенческой группы и Студенческий Совет.
</p>
      </div>
      {/* <form className="form_block">
        <b className='b' >Есть вопросы? можете написать нам</b>
        <input className='input_block' type="text" placeholder='введите текст'/>
        
        <button className='button_block' >GO</button>
      </form> */}
    </section>
      <div>
      {/* <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion> */}
    </div>
    </>
  )
}

export default  AboutUs;