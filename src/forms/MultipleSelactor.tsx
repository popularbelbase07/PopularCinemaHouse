import './MultipleSelector.css';

export default function MultipleSelector( props: multipleSelectorProps){


    function select(item: multipleSelectorModel)
    {
        const selected = [...props.selected, item];
        const nonSelected = props.nonSelected.filter( value => value !==item);
        props.onChange(selected, nonSelected)
    }

    function deSelect(item: multipleSelectorModel)
    {
        const nonSelected = [...props.nonSelected, item];
        const selected = props.selected.filter( value => value !==item);
        props.onChange(selected, nonSelected)
    }

    function selectAll ()
    {
const selected = [...props.selected, ...props.nonSelected];
const nonSelected : multipleSelectorModel[] = [];
props.onChange(selected, nonSelected);

    }

function deSelectedAll()
{
const nonSelected = [...props.selected, ...props.nonSelected];
const Selected : multipleSelectorModel[] = [];
props.onChange(Selected, nonSelected);

}

return(

    <div className="mb-3">
        <label htmlFor="">{props.displayName}</label>

    <div className="multiple-selector">
            <ul>
                {props.nonSelected && props.nonSelected.map(item => 
                   <li key={item.key} onClick = {() => {select(item)}}>{item.value}</li> 
                    )}
            </ul>
            <div className="multiple-selector-buttons">
                <button style ={{ color: 'green'}} type="button" onClick={selectAll}>{'Select All>>>'}</button>
                <button style ={{ color: 'red'}} type="button" onClick={deSelectedAll}>{'<<<Deselect All'}</button>

            </div>
            <ul>
                {props.selected && props.selected.map(item => 
                   <li key={item.key} onClick = {() => {deSelect(item)}}>{item.value}</li> 
                    )}
            </ul>

        </div>

    </div>
        
    )
}

interface multipleSelectorProps {

displayName: string;
    selected: multipleSelectorModel[];
    nonSelected: multipleSelectorModel[];
    onChange(selected: multipleSelectorModel[],
        nonSelected: multipleSelectorModel[]
        ): void;

}
export interface multipleSelectorModel{
    key: number;
    value: string;

}