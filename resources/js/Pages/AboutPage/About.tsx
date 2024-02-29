
import MainLayout from '@/Layouts/MainLayout/MainLayout';
import { Head } from '@inertiajs/react';
import { motion, useIsPresent } from 'framer-motion';



export default function About(){
  const isPresent = useIsPresent();
  console.log(location.pathname);
  
    
    return (
        <MainLayout>
          <Head>
            <title>О нас</title>
            <meta name="description" content="Страница о кофейне" />
          </Head>
          <div className="bg-purple-300 h-screen">
          <h1 className="text-xl text-purple-900 font-bold">About Page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque animi dolorum nam quam laboriosam vel dignissimos vero, eaque impedit architecto! Nulla nam modi sequi dicta pariatur laborum tenetur inventore esse.
          Voluptate sunt unde odio eligendi, sapiente architecto cum, corporis quas labore quidem dolore. Accusamus optio placeat aut error consequuntur doloribus adipisci sint dignissimos tenetur excepturi minima harum consequatur, quasi debitis!
          Iusto inventore aliquid minima officiis maiores id laboriosam dicta, possimus odit at saepe doloribus deleniti sed expedita aliquam nostrum impedit explicabo molestias exercitationem reiciendis labore ex perferendis. Labore, maiores laboriosam?
          Odit eos voluptatum perferendis accusamus corrupti, magni, ea ab et architecto aliquam ex consequuntur omnis optio ullam expedita facilis ipsa quidem quas, voluptatibus doloremque numquam minima perspiciatis nulla eius? Adipisci.
          Totam, officiis beatae! Mollitia, perspiciatis! Ducimus laboriosam doloribus esse optio beatae. Et inventore molestias impedit, dolor voluptate sapiente quasi consequuntur facere! Exercitationem hic ipsum enim nesciunt, itaque aliquam rem ut.
          Soluta quidem unde, necessitatibus voluptatibus accusamus explicabo ad, sapiente tenetur quaerat possimus deserunt? Unde sunt, vel, deleniti dolorem sint quis alias, harum nihil adipisci optio repellat soluta beatae. At, esse?
          Iure illo cupiditate, itaque ipsum hic placeat ab alias temporibus dolores nostrum porro impedit, autem maiores deleniti nulla qui aspernatur sit ullam ad suscipit mollitia veniam eaque. Reiciendis, adipisci nam!
          Sint debitis adipisci inventore impedit nobis? Nam similique exercitationem quae. Autem quasi necessitatibus distinctio dolorum illo beatae, dolores minima illum et itaque voluptate nisi, debitis quos, ut quibusdam saepe numquam.
          Eos sequi quasi ut nam nemo architecto id sit consequatur totam repudiandae praesentium magnam cum, repellendus illo eligendi, laboriosam, doloribus dignissimos eum dolor maxime. Iste veritatis distinctio deleniti harum autem.
          Nihil dolor a exercitationem voluptas minus velit consequatur quos, delectus iusto deleniti nobis necessitatibus nisi nemo ex eveniet dolores aliquid quisquam perspiciatis? Deleniti voluptas, consequuntur reprehenderit sequi molestiae magni animi.</p>
          </div>

          {/* <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
            exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
            style={{ originX: isPresent ? 0 : 1 }}
            className="fixed top-0 bottom-0 left-0 right-0 bg-purple-500 h-screen"
          /> */}
        </MainLayout>
    )
}