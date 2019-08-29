import React from "react";
import ReactDom from 'react-dom'
import { Button, Form, TextArea } from 'semantic-ui-react'
import styled, { css } from "styled-components";
import { Col, Container, ConditionalList, Row } from "ui";
import useOnClickOutside from 'use-onclickoutside'

export const Chat = () => {
  const [opened, toggle] = React.useReducer(prev => !prev, false)
  const rootElement: any = document.querySelector('#chat')
  const chatRef = React.useRef(null)
  useOnClickOutside(chatRef, toggle)

  return (
    <ChatWrapper>
    {
      opened 
        && 
        rootElement ? (
          ReactDom.createPortal(
            <ChatContantBox ref={chatRef}>
              <Col>
              <Container align='flex-start'>
                <ChatHeader close={toggle}/>
                <ChatList renderEmpty={() => <p>renderEmpty chat</p>}/>
                <ChatFooter />
              </Container>
              </Col>
            </ChatContantBox>,
            rootElement,
          )
        )
      : (
        <Button circular color='google plus' icon='chat' onClick={() => toggle(true)}/>
      )
    }
  </ChatWrapper>
  );
};

const mixins = css`
  position: fixed;
  left: 2%;
  bottom: 5%;
`

const ChatWrapper = styled.div`
  ${mixins}
`;

const ChatContantBox = styled.div`
  width: 280px;
  background: #ececec;
  color: #dd4b39;
  padding: 15px 0;
  z-index: 10;
  border-radius: 42px 10px 49px 9px;
  box-shadow: 2px 10px 21px -12px rgba(0, 0, 0, 2);
  ${mixins};
`;

const ChatHeader = ({ close }: any) => {
  return (
    <Container width='100%' padding='10px 0'>
      <Row>
        <Container justify='space-around' align='center'>
          <Button circular color='google plus' icon='close' onClick={() => close(false)}/>
          <p>ChatHeader</p>
        </Container>
      </Row>
    </Container>
  )
}

const ChatFooter = () => {
  return (
    <>
      <CenterContent>
        <Form>
          <TextArea
            placeholder="Tell us more about you..."
          />
        </Form>
      </CenterContent>
    </>
  )
}

const CenterContent = styled.div`
  margin: 10px auto;
  width: ${({ width }: { width?: string }) => width ? width : '95%'};
`

const ChatList = ({ renderEmpty }: any) => {
  return (
    <ConditionalList
      list={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
      renderEmpty={renderEmpty}
      renderExists={list => (
        <ChatMessagesWrapper>
          {list.map((item: any, id) => (
            <ChatMessages item={item} key={id} />
          ))}
        </ChatMessagesWrapper>
      )}
    />
  )
}

const ChatMessages = ({ item }: any) => {
  return (
    <Row>
      <Container justify='space-around'>
        <MessageItemWrapper>
          <p>user name</p>
          <p>messages text</p>
          <p>date</p>
        </MessageItemWrapper>
      </Container>
    </Row>
  )
}

const ChatMessagesWrapper = styled.div`
  max-height: 250px;
  overflow-y: scroll;
  width: 100%;
` 
const MessageItemWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px auto;
  background: #3cb869;
  color: #fff;
`