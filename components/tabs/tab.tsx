import { useRef } from "react"

export const Tabs = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
})

export const Tab = ({children}) => {
    const ref = useRef()
    return (
        <div >
            {children}
        </div>
    )
}

export const TabsControl = ({children}) => {
    return <>{children}</>
}