import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { 
  Button,
  Input,
  Select,
  Form,
  Table,
  message,
  Alert,
  DatePicker,
  Spin,
  Progress,
  Tag,
  Modal
  
} from 'antd';
import Icon, {PoweroffOutlined,UserOutlined,DownloadOutlined ,SyncOutlined,SmileTwoTone,HeartTwoTone,CheckCircleTwoTone} from '@ant-design/icons';
function App() {

  const fruits = ['Apple','Banana','coconut','orange'];
  const [username,setUsername] = useState('');
  const[password,setPassword]= useState('');
  const [isError, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  function submitForm(data){
    // console.log(username,password);
    // console.log(data);
    setError(true);
    message.error(`Hello ${data.username}`,10);
  }

  const data = [
    {id:1,name:'Name1',email:'myemail1@test.com',age:15 ,completed :true},
    {id:2,name:'Name2',email:'myemail2@test.com',age:17,completed :false},
    {id:3,name:'Name3',email:'myemail3@test.com',age:23,completed :true},
    {id:4,name:'Name4',email:'myemail4@test.com',age:24,completed :false},
    {id:5,name:'Name5',email:'myemail5@test.com',age:25,completed :true}
  ]


// Modal.confirm({
//   title:'Are you sure to delete the record.',
//   okText:'Delete',
//   okType:'danger',
//   cancelText:'No',
//   closable:true,
//   onOk:()=>{
//     Modal.success({title:'Deleted Successfully.'})
//   },
//   onCanconel:()=>{
//     Modal.error({title:'Delete unsuccessfully.'})
//   }
// })


  const columns = [
    {title:"Name", dataIndex:'name', key:'id' ,
      render: name =>  <a onClick={()=>alert(name)} >{name}</a>
    },
    {title:"Email", dataIndex:'email', key:'id'},
    {title:"Age", dataIndex:'age', key:'id',
      sorter:(data1,data2)=>data1.age>data2.age
    },
    {title:'Eligibility',
      render:payload => payload.age>18? <p>Eligible</p> :<p>Ineligible </p>,
      filters:[
        {text:'Completed',value:true},
        {text:'In progress',value:false},
      ],
      onFilter:(value,record)=> record.completed === value

    }
  ]

  const studentData = [
      {id:1,name:'Student 1',grade:"A+",key:'1'},
      {id:2,name:'Student 2',grade:"B",key:'2'},
      {id:3,name:'Student 3',grade:"A",key:'3'},
      {id:4,name:'Student 4',grade:"C",key:'4'},
      {id:5,name:'Student 5',grade:"C",key:'5'},
      {id:6,name:'Student 6',grade:"B",key:'6'},
  ];
  const studentColumns = [
    {title:'Student ID', dataIndex:'id'},
    {title:'Student Name', dataIndex:'name'},
    {title:'Student Grade', dataIndex:'grade',
      render:(grade)=>{
        const color = grade.includes('A')?'green':grade.includes('B')?"blue":"red";
        return <Tag color={color}>{grade}</Tag>
      }
    }
  ]

  function logRecords(){
    const data = studentData.filter((student)=>{
      return selectedRowKeys.includes(student.key);
    })
    console.log(data);
    
  }

  const HeartIcon = (props)=>{
    return <Icon
    component={()=>{
      return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M12 2C9.243 2 7 4.243 7 7V10H5C4.447 10 4 10.447 4 11V20C4 20.553 4.447 21 5 21H19C19.553 21 20 20.553 20 20V11C20 10.447 19.553 10 19 10H17V7C17 4.243 14.757 2 12 2ZM12 4C13.657 4 15 5.343 15 7V10H9V7C9 5.343 10.343 4 12 4ZM6 12H18V19H6V12ZM12 16C13.104 16 14 16.896 14 18C14 19.104 13.104 20 12 20C10.896 20 10 19.104 10 18C10 16.896 10.896 16 12 16Z" fill="#FF6F00"/>
    </svg>);  
    }}
    {...props}/>
  }
  return (
    <>


    {/* <Button 
    type="primary"
    block
    loading={false}
    icon={<PoweroffOutlined/>}
    style={{backgroundColor:"gray"}}
    className='primary-btn'
    onClick={()=>alert('clicked')}
    
    >PRESS ME</Button> */}

    {/* <Input
    placeholder='Enter name'
    maxLength={20}
    type='text'
    allowClear
    disabled={false}
    prefix={<UserOutlined/>}
    ></Input> */}

{/* <Input.Search
    placeholder='Enter name'
    maxLength={20}
    type='text'
    allowClear
    disabled={false}
    prefix={<UserOutlined/>}
    ></Input.Search> */}

    {/* <Select
    block
    mode='multiple'
    maxTagCount={2}
    style={{width:'50%'}}
    allowClear
    >
      {fruits.map((fruit,index)=>{
        return <Select.Option key={index} value={fruit}>{fruit}</Select.Option>
      })}
      
    </Select> */}

    {/* <Form onFinish={submitForm}>
      {isError && <Alert type='success' message='success' description="This is a success message" closable/>}
      <Form.Item label="Username" name="username">
        <Input placeholder='Enter Username' required value={username} onChange={(e)=>setUsername(e.target.value)}></Input>
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password placeholder='Enter Password' required value={password} onChange={(e)=>setPassword(e.target.value)}></Input.Password>
      </Form.Item>
      <Form.Item >
        <Button block type='primary' htmlType='submit'>Submit</Button>
      </Form.Item>
    </Form> */}

      {/* <Table
      loading={false}
      dataSource={data}
      columns={columns}
      pagination={{
        current:page,
        pageSize:pageSize,
        onChange:(page,pageSize)=>{
          setPage(page);
          setPageSize(pageSize);
        }
      }}
      ></Table> */}


    {/* <DatePicker placeholder="select date" picker='quarter' />
    <DatePicker.RangePicker picker='month'/>
    <DatePicker disabledDate={current=>current && (current.day() === 6 || current.day() === 0)}/> */}


  {/* <Spin spinning={false}/> */}
  {/* <Progress percent={33} />
  <Progress percent={33} type='circle' />
  <Progress percent={33} type='circle' strokeColor={'orange'} />
  <Progress percent={100} type='circle' status='success'/>
  <Progress percent={10} type='circle' status='exception' />
  <Progress percent={33} type='circle' strokeWidth={30}/>
  <Progress percent={33} type='line' status='active' strokeWidth={25} />
  <Progress percent={33} type='line'  steps={3} /> */}





    {/* <Table
    dataSource={studentData}
    columns={studentColumns}
    rowSelection={{
      type:'checkbox',
      onSelect:(record)=>{
        // console.log(record);
      },
      selectedRowKeys:selectedRowKeys,
      onChange:(keys)=>{
        setSelectedRowKeys(keys);
        
      },
      getCheckboxProps: (record) => ({disabled: record.grade === 'C'}),
      hideSelectAll:false,
      selections:[
        Table.SELECTION_NONE,
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_COLUMN,
        {
          key:'even',
          text:'Select Even Rows',
          onSelect:(allKeys)=>{
            const selectedKeys = allKeys.filter(key=>key%2==0);
            setSelectedRowKeys(selectedKeys)
          }
        },
        {
          key:'odd',
          text:'Select Odd Rows',
          onSelect:(allKeys)=>{
            const selectedKeys = allKeys.filter(key=>key%2!==0);
            setSelectedRowKeys(selectedKeys)
          }
        },
        {
          key:'excellent',
          text:'Select Excellent Students',
          onSelect:(allKeys)=>{
            const excArr = []
            const isExcelent = studentData.forEach((student)=>{
              if(student.grade.includes('A')) excArr.push(student.key);
            })
            setSelectedRowKeys(excArr)
          }
        }
      ]
    }}
    ></Table>
    <Button type="primary"
    block
    onClick={logRecords}
    >Submit</Button> */}



{/* <DownloadOutlined rotate={-90} twoToneColor={'green'} style={{fontSize:'50px'}}/>
<SyncOutlined spin style={{fontSize:'50px'}}/>
<SmileTwoTone  style={{fontSize:'50px'}} />
<HeartTwoTone twoToneColor="#eb2f96" style={{fontSize:'50px'}}/>
<CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:'50px'}}/> */}

{/* custom icon */}
{/* <HeartIcon style={{ transform: 'scale(5)', margin:'200px' }}/> */}






  </>
   );
}

export default App;
