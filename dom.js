var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');




// Form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);




function addItem(e){
    e.preventDefault();
    

    var newItem = document.getElementById('item').value; //to get input value


    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem)); // add text node

    var deleteBtn =document.createElement("button");

    deleteBtn.className ='btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);

    itemList.appendChild(li) //add ili to list

    document.getElementById('item').value=''; // to clear text after submit

    

    


}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure ?')){
            var li =e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();

    var items =itemList.getElementsByTagName('li');


    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display ='none';
        }



    });
}

