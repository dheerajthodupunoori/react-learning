import './ExpenseItem.css'

function ExpenseItem() {
    return ( 
    <div>
        <div>Date</div>
        <div>
            <h2>Title</h2>
            <div>Amount</div>
        </div>
    </div>
    );
}

// to use this component in other files we need to export this
export default ExpenseItem;