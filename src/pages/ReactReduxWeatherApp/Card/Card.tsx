import { CardComponent, CardInfo, JobPositionBlock } from "./styles"
import type { UserData} from "./types"
import Button from "components/Button/Button"

interface CardProps {
  userData: UserData
  onDelete?: () => void
  onSave?: ()=> void
}

function Card({ userData, onDelete, onSave }: CardProps) {
  return (
    <CardComponent>
      <JobPositionBlock>
{/*        
        <CardInfo>{userData.name}</CardInfo>
        <CardInfoTemp>Surname</CardTitle>
        <CardInfo>{userData.surname}</CardInfo>
        <CardTitle>Age</CardTitle>
        <CardInfo>{userData.age}</CardInfo>
        {/* Условный рендеринг */}
        {/* {userData?.jobPosition && <CardTitle>Job Position </CardTitle>}
        <CardInfo>{userData?.jobPosition}</CardInfo> */}
      </JobPositionBlock> */
      <Button onClick={onDelete} name="Delete" type="submit" isRed />
      <Button onClick={onSave} name="Save" type="submit"/>
    </CardComponent>
  )
}

export default Card
