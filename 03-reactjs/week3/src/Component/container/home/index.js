import React, { Component } from 'react'
import Student from './Student'
import StudentData, {skills} from './StudentData'

export default class Home extends Component {
    state = {
        student: [],
        search : '',
        select : '',
        isSelected: false
    }

    onShowSkills = (studentSkills)=>{
        let tampung = []
        skills.map(skill=>{
            studentSkills.map(studentSkill=>{
                // console.log(studentSkill+"="+skill.id)
                if(skill.id===studentSkill){
                    tampung.push(`${skill.desc}, `)
                }
            })
        })
        tampung[tampung.length-1] = tampung[tampung.length-1].slice(0,-2) 
        return tampung;
    }

    //setiap kali user input keyboard, maka value akan disimpan di state search
    onHandleSearch = (e) =>{
        this.setState({
            search: e.target.value,
            isSelected:false
        })
        // console.log(this.state.search)
    }

    onHandleFilter = (e) =>{
        // ternary operation 
        const value = e.target.selectedIndex !== 0 ? e.target.options[e.target.selectedIndex].value : null;
        console.log(value)
        this.setState({
            select: value,
            isSelected: true
        })
    }

    onHandleVote = (nim) =>{
        let vote = [...this.state.student]
        vote.map(x=>{
            if(x.nim===nim){
                return x.vote=x.vote+1
            }
        })
        this.setState({student:vote})
    }

    componentDidMount(){
        this.setState({
            student: StudentData
        })
    }
    render(){
        return (
            <div>
                <input placeholder="Search Student..." value={this.state.search} onChange={this.onHandleSearch}/>
                <select value = {this.state.select || ''} onChange={this.onHandleFilter}>
                    <option value="">Filter By</option>
                    <option value="nim">NIM</option>
                    <option value="nama">Nama</option>
                    <option value="ipk">IPK</option>
                    <option value="kota">Kota</option>
                    <option value="vote">Vote</option>
                </select>
                <br />
                <h1>Student</h1>
                <br />
                <div className="grid grid-cols-2 md:grid-cols-5 gap-5 text-sm">
                {
                    this.state.isSelected?(
                        this.state.student
                        .sort((a,b)=>{
                            switch(this.state.select){
                                case 'nama' :
                                    return ('' + a.nama).localeCompare(b.nama);
                                case 'ipk' :
                                    return b.ipk - a.ipk;
                                case 'kota' :
                                    return ('' + a.kota).localeCompare(b.kota);
                                case 'vote' :
                                    return b.vote - a.vote;
                                default :
                                    break;
                            }
                        }).map(x=><Student
                            nim={x.nim}
                            nama={x.nama}
                            ipk={x.ipk}
                            kota={x.kota}
                            vote={x.vote}
                            skills={x.skills}
                            onVote={this.onHandleVote}
                            onShowSkills={this.onShowSkills}
                            
                            />)
                        
                    ):(
                        this.state.student
                        .filter(f=> f.nama.toLowerCase().includes(this.state.search.toLowerCase()))
                        .map(x=><Student
                            nim={x.nim}
                            nama={x.nama}
                            ipk={x.ipk}
                            kota={x.kota}
                            vote={x.vote}
                            skills={x.skills}
                            onVote={this.onHandleVote}
                            onShowSkills={this.onShowSkills}
                            />)
                    )
                }
                </div>
            </div>
        )
    }
}
