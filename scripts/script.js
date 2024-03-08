const allBtn = document.getElementsByClassName('selected-btn');
let count = 8;


for(const btn of allBtn){
    btn.addEventListener('click',function(event){
       const selectedSeat = document.getElementById('selected-seat').innerText;
       const convertedSeatNumber = parseInt(selectedSeat);
        if(convertedSeatNumber+1 > 4){
            alert('More than 4 seats can not be selected');
            return;
        }
       const seat = convertedSeatNumber + 1;
       setInnerText('selected-seat',seat);
       count = count - 1;
       setInnerText('seats-left',count);
       event.target.setAttribute('disabled',false);
       event.target.style.backgroundColor = '#1DD100';
       const seatName = event.target.innerText;
       const seatFare = document.getElementById('seat-fare').innerText;
       const appendContainer = document.getElementById('append-container')
       const div = document.createElement('div');
       div.classList.add('flex','justify-between');
       const p1 = document.createElement('p');
       p1.innerText = seatName;
       const p2 = document.createElement('p');
       p2.innerText = 'Economy';
       const p3 = document.createElement('p');
       p3.innerText = seatFare;
       div.appendChild(p1);
       div.appendChild(p2);
       div.appendChild(p3);
       appendContainer.appendChild(div);

       price('total-price',seatFare);
       
       grandPrice();
       
       document.getElementById('next-btn').addEventListener('click',function(){
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('header').classList.add('hidden');
        document.getElementById('main').classList.add('hidden');
       })
       
       
     })
   
}

