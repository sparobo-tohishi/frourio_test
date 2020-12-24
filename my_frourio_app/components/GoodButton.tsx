import { useState, useCallback } from 'react'
import { apiClient } from '~/utils/apiClient'

const GoodButton = ({ task }) => {
  let [isGood, setIsGood] = useState(false)

  const setGood = useCallback(async () => {
    const res = await apiClient.good.get({ query: { taskId: task.id} })
    const good = res.body
    if (good == null) {
      setIsGood(true)
      await apiClient.good.post({ body: { taskId: task.id } })
    } else {
      await apiClient.good._goodId(good.id).delete()
      setIsGood(false)
    }
  }, [isGood])

  return (
    <button onClick={setGood}>
      {isGood && (
        <span>Good!!</span>
      )}
      {!isGood && (
        <span>Good?</span>
      )}
    </button>
  )
}

export default GoodButton
