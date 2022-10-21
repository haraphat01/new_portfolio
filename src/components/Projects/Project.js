import {Container, Text, createStyles, Center, Card, Image } from "@mantine/core";
import { personal } from "./data";



import "./style.css"

const useStyle = createStyles((theme) => ({
  highlight: {
    color: "rgba(122, 209, 221, 1)",
    borderRadius: theme.radius.sm,
    padding: "0px 15px",
    fontSize: 44,
    fontWeight: 500,
    marginTop: "3em",
  },

}));


export function Project() {
  const {classes} = useStyle()

  return (
    <div>
      <Container mb={30} id="pro" size="lg">
        <Center>
          <Text mb={20} className={classes.highlight}>
            Projects
          </Text>
          
        </Center>
        
        <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              
              {personal.map((data) => (
             
                <Card shadow="sm" p="lg" radius="md" withBorder>
                   <Card.Section
                    style={{ cursor: "pointer" }}
                    className="container"
                  >  
                   <Image
                      src={data.src}
                      className="image"
                      height={200}
                      alt="homepage"
                    />
                    <div className="middle">
                      <Text className="text">{data.desc}</Text>
                      <Text className="text"><a href={data.link} target="_blank">check the app</a></Text>
                    </div>
                  </Card.Section>   
                </Card>     
               
              ))}        
            </div>
          
      </Container>
    </div>
  );
};