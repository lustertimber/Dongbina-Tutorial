import Customer from './components/Customer';
import './App.css';

const customer = {
  'id'      : 1
  ,'image'  : 'https://placeimg.com/640/100/people/1'
  ,'name'   : 'KIM'
  ,'number' : '990199 Props'
  ,'gender' : 'male Props'
  ,'job'    : 'developer Props'
}

const customers = [
  {
    'id'      : 1
    ,'image'  : 'https://placeimg.com/640/100/people/1'
    ,'name'   : 'KIM'
    ,'number' : '990199'
    ,'gender' : 'male'
    ,'job'    : 'developer'
  }
  ,{
    'id'      : 2
    ,'image'  : 'https://placeimg.com/640/100/people/2'
    ,'name'   : 'KANG'
    ,'number' : '050199'
    ,'gender' : 'female'
    ,'job'    : 'Web Designer'
  }
  ,{
    'id'      : 3
    ,'image'  : 'https://placeimg.com/640/100/people/3'
    ,'name'   : 'Ryu'
    ,'number' : '990100'
    ,'gender' : 'female'
    ,'job'    : 'Slave'
  }
  ,{
    'id'      : 4
    ,'image'  : 'https://placeimg.com/640/100/people/4'
    ,'name'   : 'Ryu'
    ,'number' : '990100'
    ,'gender' : 'female'
    ,'job'    : 'Slave'
  }
]

function App() {
  return (
    <>
      {
        customers.map( c =>
        { return (
            <Customer key     = {c.id}
                      id      = {c.id}
                      image   = {c.image}
                      name    = {c.name}
                      number  = {c.number}
                      gender  = {c.gender}
                      job     = {c.job}
            />
          );
        })
      }
    </>
    /* <Customer id={customers[0].id}
              image={customers[0].image}
              name={customers[0].name}
              number={customers[0].number}
              gender={customers[0].gender}
              job={customers[0].job} />
    <Customer id={customers[1].id}
              image={customers[1].image}
              name={customers[1].name}
              number={customers[1].number}
              gender={customers[1].gender}
              job={customers[1].job} />
    <Customer id={customers[2].id}
              image={customers[2].image}
              name={customers[2].name}
              number={customers[2].number}
              gender={customers[2].gender}
              job={customers[2].job} /> */
    
  );
}

export default App;
