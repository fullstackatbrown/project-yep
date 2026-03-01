import React from 'react'
import {   
    AccordionItemProvider,  
    AccordionProvider,  
    useAccordionContext, 
    useAccordionItemContext 
} from './accordionmeta';

type WithChildren = {
    children: React.ReactNode
}
type AccordionProps = WithChildren;
type AccordionItemProps = WithChildren & {
    id: string | null
}
type AccordionTriggerProps = WithChildren;
type AccordionContentProps = WithChildren;

/**
 * 
 * @param children: React.ReactNode 
 */
export const Accordion = ({
    children
}: AccordionProps) => {
    return (
        <AccordionProvider >
            { children }
        </AccordionProvider>
    )
}

/**
 * 
 * @param children: React.ReactNode
 * @param id: string | null  
 */
export const AccordionItem = ({
    children,
    id,
}: AccordionItemProps) => {
    return (
        <>
        <AccordionItemProvider id={id}>
            { children }
        </AccordionItemProvider>
        </>
    )
}

/**
 * 
 * @param children: React.ReactNode 
 */
export const AccordionTrigger= ({
    children
} : AccordionTriggerProps) => {
    const context = useAccordionContext();
    const item = useAccordionItemContext();
    // context can be null
    if( !context || !item) return null
    return (
        <>
            <div>
                <button
                    onClick={() => context?.handleTrigger(item?.id)}
                    >
                    { children }
                </button>
            </div>
        </>
    );
}

/**
 * 
 * @param children: React.ReactNode
 * @returns 
 */
export const AccordionContent = ({
    children
} : AccordionContentProps) => {
    const context = useAccordionContext();
    const item = useAccordionItemContext();
    console.log( item?.id )
    return (
        <>
            {
                context?.activeContent === item?.id ? (
                    <div>
                        { children }
                    </div>
                ) : null
            }
        </>
    )
}

/**
 * Example usage: 
type AccordionProps = {
    id: string;
    title: string;
    description: string;
}
const list: AccordionProps[] = [
    {
        id: "1",
        title: "Title 1",
        description: "Description 1"
    },
    {
        id: "2",
        title: "Title 2",
        description: "Description 2"
    },
    {
        id: "3",
        title: "Title 3",
        description: "Descirption 3"
    },
];

then later:
<Accordion>
                {
                    list.map( (item) => (
                        <AccordionItem id={item.id}>
                            <AccordionTrigger> { item.title }</AccordionTrigger>
                            <AccordionContent>{item.description}</AccordionContent>
                        </AccordionItem>
                    ))
                }
 </Accordion>

 */