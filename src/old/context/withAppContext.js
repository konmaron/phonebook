import {Context} from "./AppContext";

export default function withAppContext(Component){
    return (props) => {
        return (
            <Context.Consumer>
                {
                    context => <Component
                        {...props}
                        context = {context}
                    />
                }
            </Context.Consumer>
        )
    }
}