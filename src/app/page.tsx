import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return(
    <div className="p-4">
    <div className="flex flex-col py-4">
     <div>
      <Button variant={"elevated"}>I am a button</Button>
      <Input placeholder="I am input"/>
      <Progress value={50}/>
      <Textarea placeholder={"I am text area."}/>
      <Checkbox/>
     </div>
    </div>
    </div>
  )
}

