<template>
  <div>
    <h6>Available in:</h6>
    <v-radio-group v-model="language">
      <v-radio label="English" value="English"></v-radio>
      <v-radio label="Español" value="Español"></v-radio>
    </v-radio-group>
    <div v-if="language == 'English'">
      <p class="font-weight-black">
        This website was created to help students and youth through the
        struggles of quarantine. We hope to provide many fun and exciting
        activities for everyone to enjoy :). Created by David Guo and Eric Guo
      </p>
      <h2>What is Autism?</h2>
      <p class="font-weight-regular">
        Autism is a spectrum disorder and is associated with a wide range of
        conditions. Individuals who have autism face challenges and have their
        own special needs. Some are capable of functioning independently, while
        others need to rely on others for help, depending on where they are on
        the spectrum. Autism is considered to be a large umbrella, grouping
        Asperger’s syndrome, autistic disorder, childhood disintegrative
        disorder, and pervasive developmental disorder not otherwise specified
        (PDD-NOS) together into autism spectrum disorder (ASD).
      </p>
      <h2>Common Characteristics of Autism</h2>
      <p class="font-weight-regular">
        Due to the diverse range of conditions and disabilities classified under
        ASD, individuals with ASD may have unique characteristics and
        challenges. They may feel and react differently than what is perceived
        as "normal". Some characteristics include (but are not limited to) :
      </p>
      <p class="font-weight-regular">
        * repeated behavior and/or movements (waving hands, rocking back and
        forth)
      </p>
      <p class="font-weight-regular">* lack of eye contact</p>
      <p class="font-weight-regular">
        * different body language (walking on tip toes, clumsiness)
      </p>
      <p class="font-weight-regular">* lack of social skills</p>
      <p class="font-weight-regular">
        * abnormally strong reactions to sensory stimulus (e.g. sound, touch,
        sight, smell, taste)
      </p>
      <h2>What Causes ASD</h2>
      <p class="font-weight-regular">
        Researchers have not discovered the sole cause of autism, but research
        shows that it is closely correlated with hereditary genes, medical
        conditions, and environmental factors. For example, gene mutations,
        chromosome abnormalities, and parental age are all factors that may
        induce ASD. Regardless of race and ethnicity, ASD is found in
        individuals across the world, evidently showing that race and ethnicity
        are not important factors.
      </p>
      <h2>Autism in Our Lives</h2>
      <p class="font-weight-regular">
        Furthermore, a 2016 study by the CDC showed that about 1 in every 54
        children were autistic. Contrasted with a similar study from 2014, there
        has been around a 10 percent increase in children who have autism. With
        advancing technology, more and more children are able to be accurately
        diagnosed with autism. The earlier the diagnosis, the more effective the
        treatment and therapy. If you know a family member or friend who
        suspects their child may have autism, it is important to advise them to
        visit a professional for a diagnosis.
      </p>
      <p class="font-weight-regular">
        Despite the obstacles that individuals with autism have to overcome
        everyday, they are strong and deserve to be treated with love,
        happiness, and respect.
      </p>
    </div>

    <div v-else>
      <p class="font-weight-black">
        Este sitio web fue creado para ayudar a estudiantes y jóvenes a través
        del luchas de cuarentena. Esperamos poder ofrecerles muchas cosas
        divertidas y emocionantes actividades para que todos disfruten :).
        Creado por David Guo y Eric Guo
      </p>
      <h2>¿Qué es el autismo?</h2>
      <p class="font-weight-regular">
        El autismo es una trastorna de espectro y está asociado con condiciones
        muy diversas. Los individuos que tienen autismo tienen que superar
        obstáculos todos los días y tienen sus propias necesidades especiales.
        Algunos individuos pueden vivir independientemente, y otros necesitan
        depender de la ayuda de otros, dependiendo de donde se encuentre en el
        espectro. El autismo es un gran paraguas que contiene muchas condiciones
        médicas diferentes, como síndrome de Asperger, trastorno autista, etc.
      </p>
      <h2>Características comunes del ASD</h2>
      <p class="font-weight-regular">
        Debido a las condiciones diversas que se clasifican como ASD, los
        individuos que tienen autismo pueden tener sus propias características y
        obstáculos únicos. Ellos experimentan y perciben los eventos en la vida
        de una manera diferente. Algunas características comunes son (pero no se
        limitan a):
      </p>
      <p class="font-weight-regular">* acciones repetidas como el balanceo</p>
      <p class="font-weight-regular">* la falta de contacto visual</p>
      <p class="font-weight-regular">
        * lenguaje corporal diferente (caminar de puntillas, torpeza)
      </p>
      <p class="font-weight-regular">* la falta de habilidades sociales</p>
      <p class="font-weight-regular">
        * Reacciones fuertes a algunos estímulos sensoriales (sonido, contacto,
        visión, olor, sabor)
      </p>
      <h2>¿Qué causa el autismo?</h2>
      <p class="font-weight-regular">
        Los investigadores y científicos no han descubierto la causa del
        autismo, pero estudios muestran que el autismo está estrechamente
        relacionado con genes hereditarios, afecciones médicas, y factores
        ambientales. Por ejemplo, las mutaciones genéticas, los anomalías
        cromosómicas, y la edad de los padres todos pueden afectar y causar ASD.
        ASD es en razas y etnias en todo el mundo, por lo tanto muestra que la
        raza y la etnia no son factores importantes.
      </p>
      <h2>Autismo en todas nuestra vidas</h2>
      <p class="font-weight-regular">
        Un estudio de 2016 realizado por el CDC mostró que aproximadamente 1 de
        cada 54 niños eran autistas en los Estados Unidos. En contraste con otro
        estudio similar de 2014, hay un aumento del diez por ciento. Con la
        mejora de la tecnología, más y más niños pueden ser diagnosticados con
        autismo. Cuanto antes se diagnostiquen, el mejor tratamiento y terapia
        podrán recibir. Es importante recomendar siempre a sus seres queridos
        que visiten un profesional si creen que su niños tienen autismo.
      </p>
      <p class="font-weight-regular">
        A pesar de nuestras diferencias, los individuos con autismo quieren ser
        amados y ser felices, al igual que nosotros.
      </p>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    language: "English",
  }),
};
</script>
