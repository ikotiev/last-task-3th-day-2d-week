const dog = {
    name: 'Дада',
    dogBreed: 'Нагази',
    color:  'Рыжий',
    purpose: 'Пастушья, Бойцовская',
    dimensions: {
        height: 86,
        weight: 90,
    },
    meal: 1,
    energy: 2,
    mood: 4,
    isGuarding: true,
    eat(){
        if(dog.meal < 6){
            dog.meal += 1;
            dog.mood -= 1;}
        },
    sleep(){
            if(dog.energy < 6){
                dog.energy += 1;
                dog.meal -= 1;}
        },
    play(){
                if(dog.mood < 6){
                    dog.mood += 1;
                    dog.energy -= 1;}
        },
guard(){
    console.log(this.isGuarding)
    if(dog.energy > 0){
        if(this.isGuarding == false){
            this.isGuarding = true
            console.log('Осторожно, злая собака!')
        }else if (dog.energy <= 0){
            console.log('Пес не может охранять ')
            this.isGuarding = false
        }
    }
}
   
} 
