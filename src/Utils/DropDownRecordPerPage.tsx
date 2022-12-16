export default function DropDownRecordsPerPage(props: dropDownRecordsPerPageProps){

return(
    <div className="mb-3" style={{width: '150px'}}>
    <label > <b>Records per page:</b> </label>
    <select
    className="form-select"
    defaultValue={10}
    onChange= {e => {
    //   setPage(1);
    //   setRecordPerPage(parseInt(e.currentTarget.value, 10));
    props.onChange(parseInt(e.currentTarget.value, 10))    
    }}
    
    >
    
    <option value={5}>10</option>
    <option value={15}>25</option>
    <option value={25}>35</option>
    <option value={50}>50</option>
    
    </select>
    
          </div>

)
}



interface dropDownRecordsPerPageProps{
    onChange(recordPerPage : number) : void;
}