import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Перегляньте наші ціни</h1>
            <p className="font13">
            Веб сайти, SEO, Реклама, Додатики на ПК, Android та iPhone - ми займаємось усім цим.
              <br />
              А головним критеріє у нашій співпраці є виконання всі домовленостей.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$150"
                title="Landing Page"
                text="Односторінкові сайти зазвичай викоритовують разом з рекламою в соц. мережа. Це чудова зв'яза для заявлення про себе."
                offers={[
                  { name: "Впізнавання бренду", cheked: true },
                  { name: "Залучення новий людей", cheked: true },
                  { name: "Отрманя контактів", cheked: true },
                  { name: "Збільшення заявок", cheked: true },
                  { name: "Інтернет продажі", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="$450"
                title="Магазин"
                text="Продажа власних товарів, або запуск бізнесу про дропшипінгу. Все як у звичайному магазині, тільки можна праюцювати без складу."
                offers={[
                  { name: "Прожада власний товарі", cheked: true },
                  { name: "Дропшипінг", cheked: true },
                  { name: "Ваш продукт шукають", cheked: true },
                  { name: "Власний бізнес", cheked: true },
                  { name: "Збільшення продажів", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="$250"
                title="Корпоративний"
                text="Сайт, що має потужні функціональні можливості з великою кількістю розділів, детальною інформацією про компанію."
                offers={[
                  { name: "Інформація про компанію", cheked: true },
                  { name: "Формування іміджу", cheked: true },
                  { name: "БД клієнтів та партнерів", cheked: true },
                  { name: "Розкрутка компанії", cheked: true },
                  { name: "Залучення аудиторії", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$30"
                title="Реклама"
                text="Обов'язковий атрибут для новго бізнесу, а також для підтримки існуючого."
                offers={[
                  { name: "Google", cheked: true },
                  { name: "Instagram", cheked: true },
                  { name: "Facebook", cheked: true },
                  { name: "Youtube", cheked: true },
                  { name: "SEO", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="$50"
                title="МагазиЧат ботин"
                text="Заготовленні відповіді на часті питання, або авоматичний збір контактів про людину."
                offers={[
                  { name: "Спілкування 24/7", cheked: true },
                  { name: "Часті питання", cheked: true },
                  { name: "Автоматизоване спілкування", cheked: true },
                  { name: "Легка розсилка нови", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="$900"
                title="PC | Mobile"
                text="Програмен забезбечення яке буде тільки у вас, або програми для багатьох користувачів."
                offers={[
                  { name: "Особиста прорама", cheked: true },
                  { name: "Робота без інтернету", cheked: true },
                  { name: "Зручність", cheked: true },
                  { name: "Приватний функціонал", cheked: true },
                  { name: "Великі можлтвості", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




