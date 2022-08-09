export const scoreStatus = {
  HIGH: 'revisit',
  MIDDLE: 'neutral',
  LOW: 'novisit',
};

export const scoreComment = {
  HIGH: '재방문 의사 있어요!',
  MIDDLE: '괜찮아요!',
  LOW: '재방문 의사 없어요!',
};

export const scoreLongComment = {
  HIGH: (
    <>
      재방문 의사 <br />
      있어요!
    </>
  ),
  MIDDLE: '괜찮아요!',
  LOW: (
    <>
      재방문 의사 <br />
      없어요!
    </>
  ),
};

export const scoreColor = {
  HIGH: 'yellow',
  MIDDLE: 'blue',
  LOW: 'red',
};
