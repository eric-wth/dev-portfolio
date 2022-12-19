import Head from "next/head";
import avatar from "../public/bitmoji-avatar.png";
import Image from "next/image";
import manageHomepage from "../public/manage-homepage.jpg";
import calculator from "../public/calculator.PNG";
import formValidation from "../public/form-validation.PNG";
import birthdayReminder from "../public/birthday-reminder.PNG";
import toursApp from "../public/tours-app.PNG";
import loremIpsum from "../public/lorem-ipsum-generator.PNG";

export default function Home() {
  return (
    <div className="dark">
      <Head>
        <title>Eric W. Developer Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">ericDev Portfolio</h1>
            <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href="#projects"              
            >
              Projects
            </a>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-6xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Eric W.
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Frontend Developer <br />
              (react.js, next.js, tailwindcss)
            </h3>
            {/* <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services in frontend development
            </p> */}
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={avatar} alt='' layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My services include developing and maintaining websites.
              Below are some projects I have implemented.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Below are projects that I have worked on.             
            </p>            
          </div>
          
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                src={manageHomepage}
                alt='fictional company landing page'
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"                
              />

              <p class='text-white text-1xl'>
                This is a project from frontend mentor that I implemented in
                next.js and tailwindcss.                
              </p> 

              <a href='https://github.com/eric-wth/manage-site-landing-page' target='_blank' rel="noreferrer" class='text-red-200 underline'>
                  Github repo
              </a>             
            </div>

            <div className="basis-1/3 flex-1 ">
              <Image
                src={calculator}
                alt='calculator app'
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"                
              />

              <p class='text-white text-1xl'>
                This is an assignment I did in a frontend training program.
                The calculator is implemented in html, css, and javascript.       
              </p> 

              <a href='https://github.com/eric-wth/calculator-assignment' target='_blank' rel="noreferrer" class='text-red-200 underline'>
                  Github repo
              </a>             
            </div>

            <div className="basis-1/3 flex-1 ">
              <Image
                src={formValidation}
                alt='form validation project'
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"                
              />

              <p class='text-white text-1xl'>
                This is a personal project I did to practice implementing
                form validation with vanilla javascript.
                The form is implemented html, css, and javascript.       
              </p> 

              <a href='https://github.com/eric-wth/form-validation' target='_blank' rel="noreferrer" class='text-red-200 underline'>
                  Github repo
              </a>             
            </div>

            <div className="basis-1/3 flex-1 ">
              <Image
                src={birthdayReminder}
                alt='birthday reminder app'
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"                
              />

              <p class='text-white text-1xl'>
                This is a personal project I did to practice the useState hook in react.
              </p> 

              <a href='https://github.com/eric-wth/birthday-reminder-app' target='_blank' rel="noreferrer" class='text-red-200 underline'>
                  Github repo
              </a>             
            </div>

            <div className="basis-1/3 flex-1 ">
              <Image
                src={toursApp}
                alt='tours app'
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"                
              />

              <p class='text-white text-1xl'>
                This is a personal project I did to practice the useEffect hook and conditional rendering in react.
              </p> 

              <a href='https://github.com/eric-wth/tours-app' target='_blank' rel="noreferrer" class='text-red-200 underline'>
                  Github repo
              </a>             
            </div>

            <div className="basis-1/3 flex-1 ">
              <Image
                src={loremIpsum}
                alt='lorem ipsum generator app'
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"                
              />

              <p class='text-white text-1xl'>
                This is a personal project I did to practice forms in react.
              </p> 

              <a href='https://github.com/eric-wth/tours-app' target='_blank' rel="noreferrer" class='text-red-200 underline'>
                  Github repo
              </a>             
            </div>                
          </div>
        </section>
      </main>
    </div>
  );
}
