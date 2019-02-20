jQuery(document).ready(function($){

    $('.live-search-list tbody tr').each(function(){
    $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    
    $('.live-search-box').on('keyup', function(){

    var searchTerm = $(this).val().toLowerCase();
  
    
        $('.live-search-list tbody tr').each(function(){
    
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
     
               
            } else {
                $(this).hide();
            }
          
        });

    });

    
    $(window).on('mousemove', function(){
        table.style.filter = "none";
        setTimeout(function(){
            table.style.filter = "blur(4px)"
        }, 30000);
    });
    
    });
    const itemsArray = [];

    function Item(make, model, generation, service, price){
        this.id = itemsArray.length + 1;
        this.fullname = make + ' ' + model + ' ' + generation + ' ' + service +  ' ' + price;
        this.make = make;
        this.model = model;
        this.generation = generation;
        this.service = service;
        this.price = price;
        itemsArray.push(this);
    }

    function addItem(make, model, generation, service, price){
        let createdItem = new Item(id, make, model, generation, service, price);
        itemsArray.push(createdItem)
    }



    const item1 = new Item('apple', 'iphone','6', 'lcd', '200');
    const item2 = new Item('apple', 'iphone', '6', 'dotyk', '100');
    const item3 = new Item('apple', 'iphone', '7', 'lcd', '100');
    const item4 = new Item('apple', 'iphone', '7', 'dotyk', '100');
    const item5 = new Item('apple', 'iphone', '8', 'lcd', '100');
    const item6 = new Item('apple', 'iphone', '8', 'dotyk', '100');
    const item7 = new Item('apple', 'iphone', 'X', 'lcd', '100');
    const item8 = new Item('apple', 'iphone', 'X', 'dotyk', '100');
    const item9 = new Item('apple', 'iphone', '5', 'lcd', '100');
    const item10 = new Item('apple', 'iphone', '5', 'dotyk', '100');
    const item11 = new Item('apple', 'iphone', '5s', 'lcd', '100');
    const item12 = new Item('apple', 'iphone', '5s', 'dotyk', '100');


    
    
    
    for(i=0; i<itemsArray.length; i++){
        let item = itemsArray[i];
        document.getElementById('tbody').innerHTML = 
        `<tr>
        <td class="test hiddenId">${itemsArray[i].fullname}</td>
        <td class="firstCapitalized">${itemsArray[i].make}</td>
        <td class="capitalize">${itemsArray[i].model} ${itemsArray[i].generation}</td>
        <td class="capitalize">${itemsArray[i].service}</td>
        <td class="capitalize">${itemsArray[i].price}</td>
        </tr>`  + document.getElementById('tbody').innerHTML;

    }
  let table = document.getElementById('table');
  console.log(table.style)
//   table.style.filter = "none"
