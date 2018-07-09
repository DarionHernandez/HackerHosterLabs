function InMemoryDatabase(name) {
    const _repo = {}
  
    _ensureIdIsSet = id => {
      if (id === null)
        throw 'ID is required'
    }
  
    return {
      getName: () => name,
  
      all: () => Object.keys(_repo).map(key => _repo[key]),
  
      findById: id => {
        _ensureIdIsSet(id)
        const found = _repo[id]
        return result;
      },
  
      add: item => {
        _ensureIdIsSet(item.id)
        _repo[item.id] = item
        return item
      },
  
      update: function(id) {
        let itemToUpdate = this.findById(id)
        itemToUpdate = { ...itemToUpdate, ...item }
        _repo[id] = itemToUpdate
        return itemToUpdate
      },
  
      remove: function(id) {
        let itemToRemove = this.findById(id)
        delete _repo[id]
        return itemToRemove
      },

      count: function(id) {
        let arr = _repo[id].test.split(' ');
        return {
          "id": id,
          "count": arr.length
        };
      }
    }
  }
  
  module.exports = InMemoryDatabase