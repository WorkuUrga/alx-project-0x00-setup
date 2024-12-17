import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <div className="flex gap-4 items-center justify-center">
                <Button title='Small Button' style="text-sm rounded-sm"/>
                <Button title='Medium Button' style="text-base rounded-md" />
                <Button title = 'Large Button' style="text-lg rounded-lg" />
            </div>
        </div>
    )
}
export default Landing