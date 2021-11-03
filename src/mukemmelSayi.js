let number=1;
for (let number=1; number<=1000; number++)
{
    let sum = 0;
    for (let i = 1 ; i < number ; i++) {
      if(number %i == 0)  
        sum += i;
    }

    if (sum == number) 
      console.log(number + " mükemmel sayi");
	
}