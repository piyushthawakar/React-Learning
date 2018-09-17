import React from 'react';

export default class ItemList extends React.Component{
    GetChangeEvent() {
        alert(1);
    }
    render(){
        return (
            <div>
                <ol>
                    <li>
                    <span>
                        <input type="checkbox" className="GetCheckBox" />
                    </span>
                        <span text="Name1">
                            {this.props.text}
                    </span>
                    </li>
                    <li>
                    <span>
                        <input type="checkbox" className="GetCheckBox" />
                    </span>
                        <span text="Name2">
                            {this.props.text}
                    </span>
                    </li>
                    <li>
                    <span>
                        <input type="checkbox" className="GetCheckBox" />
                    </span>
                        <span text="Name3">
                            {this.props.text}
                    </span>
                    </li>
                    <li>
                    <span>
                        <input type="checkbox" className="GetCheckBox" />
                    </span>
                        <span text="Name4">
                            {this.props.text}
                    </span>
                    </li>
                </ol>

                <input type="text" className="GetInputValue" onChange={this.GetChangeEvent}/>
            </div>
        );
    };
}