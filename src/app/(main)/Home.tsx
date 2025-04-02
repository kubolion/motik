import Welcome from "@/components/sections/home/Welcome/Welcome";
import Buisnes from "@/components/sections/home/Buisnes/Buisnes";
import Technology from "@/components/sections/home/Technology/Technology";
import Details from  "@/components/sections/home/Details/Details";
import About from "@/components/sections/home/About/About";
import Example from "@/components/sections/home/Example/Example";
import Questions from "@/components/sections/home/Questions/Questions";
export default function Home() {
    return (
        <>
            <Welcome/>
            <Buisnes/>
            <Technology/>
            <Details/>
            <About/>
            <Example/>
            <Questions/>

        </>
    )
}
