import { Footer} from "../../components/footer/footer";

export const AboutPage = () => {
    return(
        <div className="bg-[#474747]">
            <div className="bg-about w-full h-[50vh] bg-center bg-no-repeat">
                <div className="max-w-[1520px] m-auto">
                        
                </div>
            </div>
            <div className="max-w-[1520px] m-auto mt-[94px]">
                <div className="flex justify-between">
                    <div className="w-[600px] h-[375px] bg-[#EFEFEF]/[.50] border-white border-2 rounded-[7px]">
                        <p className="p-[34px] text-[20px] w-[496px] h-[291px]">Добро пожаловать в мир драконов и их гримуаров! Мы — команда энтузиастов, увлеченных
                                 изучением мифологии и магии, связанных с этими величественными существами. На нашем
                                  сайте вы найдете уникальные материалы о драконах, их истории, культуре и магических свойствах.</p>
                    </div>
                    <div className="flex flex-col gap-[35px]">
                            <img src="src/assets/1.png" alt="" className="w-[600px] h-[100px] rounded-[7px]"/>
                            <img src="src/assets/2.png" alt="" className="w-[600px] h-[100px] rounded-[7px]"/>
                            <img src="src/assets/3.png" alt="" className="w-[600px] h-[100px] rounded-[7px]"/>
                    </div>
                </div>
                <div className="flex justify-between mt-[120px]">
                    <img src="src/assets/image 3.png" alt="" className="w-[600px] h-[890px] animate-appear"/>
                    <div className="bg-[#EFEFEF]/[.50] border-white border-2 rounded-[7px] w-[600px] h-[890px]">
                        <div className="p-[34px] text-[23px] flex flex-col gap-[20px]">
                            <p className="mb-[15px]"><b>Что мы предлагаем:</b></p>
                            <p>
                                <b>Глубокие исследования:</b> <br/> Мы проводим тщательные исследования,
                                чтобы предоставить вам достоверную информацию о различных видах драконов,
                                их привычках и среде обитания
                            </p>
                            <p>
                                <b>Гримуары и заклинания:</b> <br /> Узнайте о древних гримуарах, содержащих заклинания и ритуалы,
                                связанные с драконами. Мы делимся редкими текстами и их интерпретациями
                            </p>
                            <p>
                                <b>Мифология и легенды:</b> <br /> Погрузитесь в мифы и легенды о драконах из разных культур. Мы расскажем о том,
                                как драконы изображались в искусстве и литературе на протяжении веков.
                            </p>
                            <p>
                                <b>Сообщество единомышленников:</b> <br /> Присоединяйтесь к нашему сообществу, где вы
                                сможете обсудить свои идеи, задать вопросы и поделиться своими знаниями о драконах.
                            </p>
                        </div>
                    </div>
                </div>
                <div  className="flex justify-between mt-[204px]">
                    <div className="bg-[#EFEFEF]/[.50] border-white border-2 rounded-[7px] w-[606px] h-[461px] p-[34px] text-[25px]">
                        <p>Наша миссия: <br />
                           Мы стремимся вдохновить людей на изучение магического мира драконов и их гримуаров, а также сохранить и передать знания о них будущим поколениям.</p>
                    </div>
                    <div className="bg-[#EFEFEF]/[.50] border-white border-2 rounded-[7px] w-[606px] h-[461px] p-[34px] text-[25px] animate-left">
                        <p>Контактная информация: <br />
                           Если у вас есть вопросы или предложения, не стесняйтесь связаться с нами через контакты оставленные на сайте.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}