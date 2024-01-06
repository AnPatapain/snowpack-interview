# Snowpack interview coding project
### Stack  
Nodejs, Typescript, Express, React, MongoDB  
### Feature  
- Search image
- Add image into collection  
### General  
- Implement a CI CD pipeline to automatically deploy for each commit on master 
![pipeline](./assets/pipeline.png)
- Group folder by layer (due to the small size of project)
- Dynamically switch from development to production using env
### Backend Architecture  
![backend architecture](./assets/backend-architecture.png)
- Centralize configuration et error handling
![configuration](./assets/config.png)
- JWT authentication
- Implement LRU Cache, improve x1000 search image time
![cache](./assets/cache.png)
- Image search without cache takes: 1470 mile-seconds
![testWithoutCache](./assets/withoutCacheTest.png)
- Image search without cache takes: 1.12 mile-seconds
![testWithCache](./assets/withCacheTest.png)
### Frontend Components  
![frontend components](./assets/frontend-component.png)
