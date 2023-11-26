import { ActivityIndicator, Dimensions, Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './style'

//packages
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import colors from '../constants/colors';

export class CustomRecyclerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list: new DataProvider((r1, r2) => {
            return r1 !== r2;
          }),
          dataList: [],
          loadList: false,
          loadMoreData: false
        };
        this.layoutProvider = new LayoutProvider(
          i => {
            return this.state.list.getDataForIndex(i).type;
          },
          (type, dim) => {
            dim.width = Dimensions.get('window').width;
            dim.height = Dimensions.get('window').height;
          },
        );
    }

    loadDataFromApi(data) {
        if(data.length !== 0){
          this.state.dataList.splice(0, this.state.dataList.length)
          for (let i in data) {
            this.state.dataList.push({
              type: 'NORMAL',
              item: data[i],
            });
            if (i == data.length - 1) {
              // const filter = this.state.dataList.filter((thing,index,self) =>
              //     // index === ,
              //     console.log("index",self.findIndex((t) => {
              //       t.item._id == thing.item._id
              //     }),index)
              // )
              this.setState({
                list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
                  this.state.dataList,
                ),
                loadList: true,
                loadMoreData: false
              });
            }
          }
        }   
    }

    updateCount(value, id) {
        this.state.dataList[id].item.value = value;
    
        this.setState({
          dataList: this.state.dataList,
        });
        this.setState({
          list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
            this.state.dataList
          ),
        });
      }
    
      isSave(value, id) {
        this.state.dataList[id].item.isSave = value;
    
        this.setState({
          dataList: this.state.dataList,
        });
        this.setState({
          list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
            this.state.dataList
          ),
        });
      }



    onEndReached =()=> {
       if(this.state.dataList.length > 9){
        this.setState({loadMoreData: true});
        const lastId = this.state.dataList[this.state.dataList.length - 1].item._id
        this.props.onEndReached(lastId)
       }
    }

    renderFooter = () => {
        return  <View style={{height:500,alignItems:"center",justifyContent:"center"}}>
                   {this.state.loadMoreData && (
                    <ActivityIndicator color={colors.primary}/>
                   )}
                 </View>
    };

    rowRenderer = (type, data, index) => {
        const d = data.item
        return <Text>jjjj</Text>
      };
  render() {
    const {loadList} = this.state
    return (
      <View style={styles.container}>
         {loadList ? (
              <RecyclerListView
                style={styles.list}
                rowRenderer={this.props.rowRenderer}
                dataProvider={this.state.list}
                layoutProvider={this.layoutProvider}
                forceNonDeterministicRendering={true}
                renderFooter={this.renderFooter}
                // onEndReached={this.onEndReached}
                isHorizontal={this.props.horizontal}
                pagingEnable={this.props.pagingEnable}
                extendedState={{state:this.state.dataList}}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>No Data</Text>
              </View>
        )}
      </View>
    )
  }
}

export default CustomRecyclerList