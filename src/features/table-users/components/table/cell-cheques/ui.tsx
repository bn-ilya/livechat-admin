import { Avatar, AvatarGroup, useDisclosure } from "@nextui-org/react"
import { ICellChequesProps } from "./ui.props"
import { FC } from "react"
import { ModalImages } from "../../../../../shared/ui";
import { backendUrl } from "../../../../../shared/consts";

export const CellCheques: FC<ICellChequesProps> = ({cheques}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const imageUrls = cheques.map(cheque => backendUrl + cheque.url);

  return (
    <>
      {imageUrls.length > 1 ? (
        <AvatarGroup isBordered className="cursor-pointer">
          {imageUrls.map(url => <Avatar key={url} onClick={onOpen} src={url} className="cursor-pointer"/>)}
        </AvatarGroup>
      ) : (
        <Avatar key={imageUrls[0]} onClick={onOpen} src={imageUrls[0]} className="cursor-pointer"/>
      )}

      <ModalImages isOpen={isOpen} onOpenChange={onOpenChange} imageUrls={imageUrls} />
    </>
  )
}