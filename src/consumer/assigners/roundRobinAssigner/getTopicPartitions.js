const flatten = require('../../../utils/flatten')

/**
 * @param {string[]} topics
 * @param {import('../../../../types').Cluster} cluster
 */
module.exports = (topics, cluster) => {
  const topicsPartionArrays = topics.map(topic => {
    const partitionMetadata = cluster.findTopicPartitionMetadata(topic)
    return partitionMetadata.map(m => ({ topic: topic, partitionId: m.partitionId }))
  })
  return flatten(topicsPartionArrays)
}
